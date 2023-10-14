"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "Email must be a validate email." }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters." })
    .max(20, { message: "Password must not be over 20 characters." }),
});

export default function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <div className="w-[95%] h-full mt-2 flex flex-col justify-start items-center relative">
        <form onSubmit={() => console.log("Submited")} className="w-full flex flex-col items-center gap-2">
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
              <FormItem className="w-full">
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
        <div className="flex flex-col w-full justify-center items-center absolute bottom-6 gap-4">
          <Link href="/home" className="w-[70%]">
            <Button className="bg-purple-600 w-full transition ease-in delay-100 hover:bg-purple-500 hover:scale-95">Register</Button>
          </Link>
          <p className="text-base font-medium tracking-tight text-slate-600 text-center">
            Do you already have an account?,{" "}
            <Link href="/login" className="text-purple-600">
              Log in.
            </Link>
          </p>
        </div>
      </div>
    </Form>
  );
}
