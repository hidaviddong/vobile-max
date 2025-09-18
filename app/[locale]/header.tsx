import LocaleSelector from "@/components/locale-selector";
import NavMenu from "@/components/nav-menu";
import SheetMenu from "@/components/sheet-menu";
import SignOut from "@/components/sign";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center border-b bg-background/80 p-4 backdrop-blur h-16">
      <Logo />

      <div className="flex-1 flex justify-center">
        <NavMenu />
      </div>

      <div className="self-end flex justify-center items-center space-x-4">
        <SignOut />
        <LocaleSelector />
        <SheetMenu />
      </div>
    </header>
  );
}
