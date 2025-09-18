"use client";
import Logo from "@/components/logo";
import SheetLink from "@/components/sheet-link";
import { Button } from "@/components/ui/button";
import { VOBILE_LINKEDIN_URL, VOBILE_URL, VOBILE_X_URL } from "@/lib/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="border-t bg-background/80 backdrop-blur">
      <div className="flex flex-col lg:flex-row items-start justify-between p-4 gap-4">
        <Logo />

        <div className="flex-1 px-0 lg:px-8">
          <div className="text-center lg:text-left">
            <p className="text-sm leading-relaxed">
              {t("description")} <Link href={VOBILE_URL}>Vobile.com</Link>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 w-full lg:w-auto justify-center lg:justify-end">
          <Button variant="link" asChild>
            <SheetLink href="/privacypolicy">{t("privacyPolicy")}</SheetLink>
          </Button>
          <Button variant="link" asChild>
            <SheetLink href={VOBILE_X_URL}>{t("x")}</SheetLink>
          </Button>
          <Button variant="link" asChild>
            <SheetLink href={VOBILE_LINKEDIN_URL}>{t("linkedin")}</SheetLink>
          </Button>
        </div>
      </div>
    </footer>
  );
}
