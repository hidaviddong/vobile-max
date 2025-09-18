import { auth } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import PageClient from "./page.client";

export default async function Home() {
  const t = await getTranslations("HomePage");
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }
  return (
    <div className="w-full text-center space-y-4">
      <p className="text-3xl font-bold">{t("title")}</p>
      <p className="text-md text-gray-500">{t("description")}</p>
      <PageClient />
    </div>
  );
}
