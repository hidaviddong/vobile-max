import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full text-center space-y-4">
          <p className="text-3xl font-bold">{t("title")}</p>
          <p className="text-md text-gray-500">{t("description")}</p>
          <p className="text-md text-gray-500">{t("test")}</p>
        </div>
      </main>
    </div>
  );
}
