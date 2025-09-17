import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/lib/i18n/routing";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProviders from "./query-providers";
import { Toaster } from "@/components/ui/sonner";
import LocaleSelector from "@/components/localeSelector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAX",
  description: "Vobile MAX",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <header className="fixed inset-x-0 top-0 z-50 flex justify-end border-b bg-background/80 p-4 backdrop-blur">
            <LocaleSelector currentLocale={locale} />
          </header>
          <QueryProviders>
            <main className="pt-16">{children}</main>
          </QueryProviders>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
