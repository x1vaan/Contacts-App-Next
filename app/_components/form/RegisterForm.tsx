"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import * as z from "zod";
import { register } from "@/app/_actions/ContactsActions";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(30, { message: "Username must not be over 40 characters." }),
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters." })
    .max(40, { message: "Username must not be over 40 characters." }),
  email: z.string().email({ message: "Email must be a validate email." }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters." })
    .max(20, { message: "Password must not be over 20 characters." }),
});

export default function RegisterForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: register,
    onSuccess: (data: any) => {
      if (data.statusCode === 400) return toast.error(data.message);
      toast.success("User registered.");
      router.push("/login");
    },
    onError: (data) => {
      toast.error(data.message);
    },
  });

  const submitRegister = async (values: z.infer<typeof formSchema>) => {
    mutate(values);
  };

  return (
    <Form {...form}>
      <div className="w-[95%] h-full mt-2 flex flex-col justify-start items-center relative">
        <form onSubmit={form.handleSubmit(submitRegister)} className="w-full flex flex-col items-center gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Name:</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Username:</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full mb-3">
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col w-full justify-center items-center mb-3 gap-4">
            <Button className="bg-purple-600 w-full transition ease-in delay-100 hover:bg-purple-500 hover:scale-95" type="submit">
              Register
            </Button>
            <p className="text-base font-medium tracking-tight text-slate-600 text-center">
              Do you already have an account?{" "}
              <Link href="/login" className="text-purple-600">
                Log in.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Form>
  );
}
