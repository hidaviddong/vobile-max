import LocaleSelector from "@/components/locale-selector";
import NavMenu from "@/components/nav-menu";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center border-b bg-background/80 p-4 backdrop-blur">
      <Image
        src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/siteLogo.svg"
        alt="Vobile Logo"
        width={100}
        height={100}
      />

      <div className="flex-1">
        <NavMenu />
      </div>

      <div className="self-end">
        <LocaleSelector />
      </div>
    </header>
  );
}
