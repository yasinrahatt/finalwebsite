import type { Metadata } from "next";
import { LoginForm } from "@/components/LoginForm";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Login | Yasin Rahat’s Memo",
  description: "Private publishing login for Yasin Rahat’s Memo.",
};

export default function LoginPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Login</SectionLabel>
        <h1 className="text-5xl font-black leading-none text-ink sm:text-7xl">
          private publisher
        </h1>
        <p className="mt-7 text-xl leading-9 text-neutral-700">
          Send yourself a magic link, then write and publish posts from the
          private dashboard.
        </p>
        <div className="mt-10">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
