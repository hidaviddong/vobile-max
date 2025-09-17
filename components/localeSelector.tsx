"use client";

import * as React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

// 以下 import 假设你有 shadcn 风格的 Select 组件（Radix UI 基础）
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

const LOCALES = ["en", "zh-CN", "zh-HK"] as const;
type Locale = (typeof LOCALES)[number];

export default function LocaleSelector({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const t = useTranslations("selector");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 构造当前完整 path（不包含 locale 前缀）
  // 假设你的路由格式是 /{locale}/... 例如 /en/about
  // 我们需要把前缀替换为目标 locale
  const buildUrlFor = (locale: Locale) => {
    // pathname 例如 "/en/dashboard/settings" 或 "/dashboard"
    // 如果你启用了 next.config i18n，会自动在 pathname 前带 locale
    let path = pathname || "/";
    // 移除可能的现有 locale 前缀 (en, zh-CN, zh-HK)
    const segments = path.split("/").filter(Boolean); // 去空
    if (segments.length > 0 && LOCALES.includes(segments[0] as Locale)) {
      segments.shift();
    }
    const newPath = "/" + [locale, ...segments].filter(Boolean).join("/");
    const sp = searchParams ? `?${searchParams.toString()}` : "";
    return newPath + sp;
  };

  const handleChange = (value: string) => {
    const target = value as Locale;
    const url = buildUrlFor(target);
    // 使用 next/navigation 的 push 做客户端导航
    router.push(url);
  };

  return (
    <div className="inline-block">
      <label className="sr-only">{t("label")}</label>
      <Select onValueChange={handleChange} defaultValue={currentLocale}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder={t("label")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">{t("en")}</SelectItem>
          <SelectItem value="zh-CN">{t("zh-CN")}</SelectItem>
          <SelectItem value="zh-HK">{t("zh-HK")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
