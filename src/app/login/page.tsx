"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/user-store";

const formSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8),
});

export type FormSchema = z.infer<typeof formSchema>;

const Login = () => {
  const setUser = useUserStore.use.setUser();
  const router = useRouter();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutateAsync: loginMutation } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.user);
      toast.success("Success", {
        description: data.message,
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });

      router.replace("/");
    },
    onError: (error) => {
      toast.error("Error", {
        description: error.message,
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
    },
  });

  async function onSubmit(values: FormSchema) {
    await loginMutation(values).then(() => form.reset());
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="w-sm max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
