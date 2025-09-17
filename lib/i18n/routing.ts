import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "zh-CN", "zh-HK"],
  // Used when no locale matches
  defaultLocale: "en",
});
