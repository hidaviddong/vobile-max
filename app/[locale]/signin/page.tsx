import { useTranslations } from "next-intl";
import SignInPageClient from "./page.client";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <SignInPageClient />
        </div>
      </div>
    </div>
  );
}
