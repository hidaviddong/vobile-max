import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <div className="w-full text-center space-y-4">
      <p className="text-3xl font-bold">{t("title")}</p>
      <p className="text-md text-gray-500">{t("description")}</p>
    </div>
  );
}
