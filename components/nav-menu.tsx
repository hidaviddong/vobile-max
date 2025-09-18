"use client";
import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavigationLink from "./nav-link";
import { useIsMobile } from "@/hooks/use-mobile";

export default function NavMenu() {
  const t = useTranslations("Header");
  const isMobile = useIsMobile();
  if (isMobile) return null;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="flex space-x-4">
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/creator">{t("creator")}</NavigationLink>
          <NavigationLink href="/asset">{t("asset")}</NavigationLink>
          <NavigationLink href="/databridge">{t("dataBridge")}</NavigationLink>
          <NavigationLink href="https://www.crealabs.io/projects">
            {t("marketPlace")}
          </NavigationLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
