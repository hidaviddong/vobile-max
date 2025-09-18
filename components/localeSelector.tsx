"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { type Locale, LOCALES } from "@/lib/constants";

import { usePathname, useRouter } from "@/lib/i18n/navigation";

export default function LocaleSelector({}) {
  const locale = useLocale();
  const t = useTranslations("selector");
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (locale: Locale) => {
    router.replace(pathname, { locale });
  };

  return (
    <Select onValueChange={handleLocaleChange} defaultValue={locale}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder={t("label")} />
      </SelectTrigger>
      <SelectContent>
        {LOCALES.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {t(locale)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
