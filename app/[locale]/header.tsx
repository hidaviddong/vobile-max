import LocaleSelector from "@/components/localeSelector";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-end border-b bg-background/80 p-4 backdrop-blur">
      <LocaleSelector />
    </header>
  );
}
