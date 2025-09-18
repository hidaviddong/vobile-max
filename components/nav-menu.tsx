"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavigationLink from "./nav-link";
import { useTranslations } from "next-intl";

export default function NavMenu() {
  const t = useTranslations("Header");
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="flex">
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
