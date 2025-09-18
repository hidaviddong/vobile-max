"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import { Link } from "@/lib/i18n/navigation";
import { SheetClose } from "@/components/ui/sheet";

export default function SheetLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <SheetClose asChild>
      <Link
        aria-current={isActive ? "page" : undefined}
        href={href}
        className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
        style={{ fontWeight: isActive ? "bold" : "normal" }}
        {...rest}
      />
    </SheetClose>
  );
}
