import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/lib/i18n/routing";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProviders from "./query-providers";
import { Toaster } from "@/components/ui/sonner";
import Header from "./header";
import Footer from "./footer";

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
    <html lang={locale} className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <QueryProviders>
            <div className="font-sans min-h-screen">
              <Header />
              <main className="flex flex-col gap-[32px] items-center justify-center min-h-[calc(100vh-4rem)] p-8 sm:p-20">
                {children}
              </main>
            </div>
            <Footer />
          </QueryProviders>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
