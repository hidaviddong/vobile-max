import LocaleSelector from "@/components/locale-selector";
import NavMenu from "@/components/nav-menu";
import SheetMenu from "@/components/sheet-menu";
import Sign from "@/components/sign";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center border-b bg-background/80 p-4 backdrop-blur h-16">
      <Logo />

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <NavMenu />
      </div>

      <div className="ml-auto flex items-center space-x-4">
        <Sign />
        <LocaleSelector />
        <SheetMenu />
      </div>
    </header>
  );
}
