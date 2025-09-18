"use client";
import { useTranslations } from "next-intl";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import SheetLink from "./sheet-link";
import { MARKET_PLACE_URL } from "@/lib/constants";

export default function SheetMenu() {
  const t = useTranslations("Header");
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 top-16 h-[calc(100vh-4rem)]">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <nav className="flex flex-col space-y-4 mt-6">
          <SheetClose asChild>
            <SheetLink href="/">{t("home")}</SheetLink>
          </SheetClose>
          <SheetClose asChild>
            <SheetLink href="/creator">{t("creator")}</SheetLink>
          </SheetClose>
          <SheetClose asChild>
            <SheetLink href="/asset">{t("asset")}</SheetLink>
          </SheetClose>
          <SheetClose asChild>
            <SheetLink href="/databridge">{t("dataBridge")}</SheetLink>
          </SheetClose>
          <SheetClose asChild>
            <SheetLink href={MARKET_PLACE_URL}>{t("marketPlace")}</SheetLink>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
