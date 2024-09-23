"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import * as z from "zod";
import { register } from "@/app/_actions/ContactsActions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const submitRegister = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      register(values).then((res) => {
        if (res?.status === 401 || res?.status === 400) {
          toast.error("An error ocurred creating the User, please try again.");
        } else {
          toast.success("The user have been registered succesfully.");
          router.push("/login");
        }
      });
    } catch (error) {
      toast.error("An error ocurred creating the User, please try again.");
    }
  };

  return (
    <div className="relative h-screen w-full sm:h-auto sm:max-w-md p-8 space-y-6 bg-[#121212] rounded-lg shadow-xl">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter text-white">
          Register
        </h1>
        <p className="text-sm text-zinc-400">Register to continue</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitRegister)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    {...field}
                    className="text-base bg-inputColor border-zinc-700 text-white placeholder:text-zinc-400 focus:border-greenSpotify"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300">Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your username"
                    {...field}
                    className="text-base bg-inputColor border-zinc-700 text-white placeholder:text-zinc-400 focus:border-greenSpotify"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    {...field}
                    className="text-base bg-inputColor border-zinc-700 text-white placeholder:text-zinc-400 focus:border-greenSpotify"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    {...field}
                    className="text-base bg-inputColor border-zinc-700 text-white placeholder:text-zinc-400 focus:border-greenSpotify"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="border-zinc-700 data-[state=checked]:bg-[#1DB954] data-[state=checked]:border-[#1DB954]"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-medium text-zinc-300">
                    Accept terms and conditions
                  </FormLabel>
                  <FormDescription className="text-xs text-zinc-400">
                    You agree to our Terms of Service and Privacy Policy.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          /> */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-greenSpotify text-black hover:bg-[#1ED760] focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2 focus:ring-offset-[#121212]"
          >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""}
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
