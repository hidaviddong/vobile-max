import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/lib/i18n/routing";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProviders from "./query-providers";
import { Toaster } from "@/components/ui/sonner";
import Header from "./header";

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
          <Header />
          <QueryProviders>
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
              <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                {children}
              </main>
            </div>
          </QueryProviders>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
