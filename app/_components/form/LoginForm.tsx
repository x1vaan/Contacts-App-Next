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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "El email debe ser válido." }),
  password: z
    .string()
    .min(4, { message: "La contraseña debe tener al menos 4 caracteres." })
    .max(20, { message: "La contraseña no debe tener más de 20 caracteres." }),
});

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitLogin = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (result?.status === 401) {
        toast.error("Login failed, try again.");
      } else {
        toast.success("Logged in successfully.");
        router.push("/home");
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full sm:h-auto sm:max-w-md p-8 space-y-6 bg-[#121212] rounded-lg shadow-xl">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter text-white">
          Login
        </h1>
        <p className="text-sm text-zinc-400">Login to continue</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitLogin)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="youremail@example.com"
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
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-greenSpotify text-black hover:bg-[#1ED760] focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2 focus:ring-offset-[#121212]"
          >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""}
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </form>
      </Form>
      <p className="text-sm text-zinc-400 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-greenSpotify hover:underline">
          Register.
        </Link>
      </p>
    </div>
  );
}
