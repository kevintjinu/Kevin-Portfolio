import Link from "next/link";

type NavButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavButton({ href, children }: NavButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
    >
      {children}
    </Link>
  );
}
