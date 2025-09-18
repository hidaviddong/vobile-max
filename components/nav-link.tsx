"use client";

import { ComponentProps } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

interface NavMenuLinkProps
  extends ComponentProps<typeof NavigationMenuPrimitive.Link> {
  href: string;
}

export default function NavMenuLink({
  href,
  className,
  ...props
}: NavMenuLinkProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
      {...props}
      href={href}
    />
  );
}
