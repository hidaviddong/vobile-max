"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useMutation } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function PageClient() {
  const t = useTranslations("Header");
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: async () => {
      return await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/signin");
          },
        },
      });
    },
  });

  return (
    <Button
      variant="outline"
      onClick={() => signOutMutation.mutate()}
      disabled={signOutMutation.isPending}
    >
      {signOutMutation.isPending ? (
        <Loader2Icon className="animate-spin" />
      ) : (
        t("signOut")
      )}
    </Button>
  );
}
