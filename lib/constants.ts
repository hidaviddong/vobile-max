export const LOCALES = ["en", "zh-CN", "zh-HK"] as const;
export const DEFAULT_LOCALE = "en";
export type Locale = (typeof LOCALES)[number];
