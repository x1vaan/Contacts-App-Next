"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
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

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <div className="w-[95%] h-full mt-2 flex flex-col justify-start items-center relative">
        <form onSubmit={() => console.log("Submited")} className="w-full flex flex-col items-center">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Username" {...field} className="focus-visible:ring-transparent"/>
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
        <Button className="bg-purple-600 hover:bg-purple-500 w-[70%] absolute bottom-6">Login</Button>
      </div>
    </Form>
  );
}
