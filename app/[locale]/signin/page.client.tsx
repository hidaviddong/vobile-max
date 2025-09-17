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

export default function SignInPageClient() {
  const t = useTranslations("signInPage");
  const signInSchema = z.object({
    email: z.string().email(t("errors.invalidEmail")),
    password: z.string().min(6, t("errors.passwordTooShort")),
  });
  type SignInFormValues = z.infer<typeof signInSchema>;

  const signInForm = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSignInSubmit(values: SignInFormValues) {
    console.log(values);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("card.title")}</CardTitle>
        <CardDescription>{t("card.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...signInForm}>
          <form onSubmit={signInForm.handleSubmit(onSignInSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <FormField
                  control={signInForm.control}
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
                <div className="flex items-center">
                  <FormField
                    control={signInForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="flex-1">
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
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  disabled={signInForm.formState.isSubmitting}
                  className="w-full"
                >
                  {signInForm.formState.isSubmitting ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    t("card.signIn")
                  )}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              {t("card.dontHaveAccount")}{" "}
              <Link href="/signup">
                <Button
                  type="button"
                  variant="link"
                  className="p-0 underline underline-offset-4"
                >
                  {t("card.signUp")}
                </Button>
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
