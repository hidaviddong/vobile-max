import SignUpPageClient from "./page.client";

export default async function Page() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
      <SignUpPageClient />
    </div>
  );
}
