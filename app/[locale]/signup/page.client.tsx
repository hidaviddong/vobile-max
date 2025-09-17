"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod/v3";
import { useTranslations } from "next-intl";
import { useMutation } from "@tanstack/react-query";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignUpPageClient() {
  const router = useRouter();
  const t = useTranslations("signUpPage");
  const signUpSchema = z
    .object({
      username: z
        .string()
        .min(2, {
          message: t("errors.usernameTooShort"),
        })
        .max(50, {
          message: t("errors.usernameTooLong"),
        }),
      email: z.string().email(t("errors.invalidEmail")),
      password: z.string().min(6, {
        message: t("errors.passwordTooShort"),
      }),
      confirmPassword: z.string().min(6, {
        message: t("errors.passwordTooShort"),
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("errors.passwordsDontMatch"),
      path: ["confirmPassword"],
    });

  type SignUpFormValues = z.infer<typeof signUpSchema>;

  const signUpForm = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signUpMutation = useMutation({
    mutationFn: async (values: SignUpFormValues) => {
      return await authClient.signUp.email(
        {
          name: values.username,
          email: values.email,
          password: values.password,
          callbackURL: "/",
        },
        {
          onSuccess: () => {
            router.push("/");
          },
          onError: (error) => {
            toast.error(error.error.message);
          },
        }
      );
    },
  });

  function onSignUpSubmit(values: SignUpFormValues) {
    signUpMutation.mutate(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("card.title")}</CardTitle>
        <CardDescription>{t("card.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...signUpForm}>
          <form onSubmit={signUpForm.handleSubmit(onSignUpSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <FormField
                  control={signUpForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="username">
                        {t("card.username")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="username"
                          placeholder={t("card.username")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <FormField
                  control={signUpForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">{t("card.email")}</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <FormField
                  control={signUpForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">
                        {t("card.password")}
                      </FormLabel>
                      <FormControl>
                        <Input id="password" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <FormField
                  control={signUpForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="confirmPassword">
                        {t("card.confirmPassword")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="confirmPassword"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  disabled={signUpMutation.isPending}
                  className="w-full"
                >
                  {signUpMutation.isPending ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    t("card.signUp")
                  )}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              {t("card.alreadyHaveAccount")}{" "}
              <Link href="/signin">
                <Button
                  type="button"
                  variant="link"
                  className="p-0 underline underline-offset-4"
                >
                  {t("card.signIn")}
                </Button>
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
