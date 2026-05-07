import { MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  href: string;
  children?: string;
  className?: string;
  floating?: boolean;
};

export function WhatsAppButton({
  href,
  children = "Agendar no WhatsApp",
  className = "",
  floating = false,
}: WhatsAppButtonProps) {
  if (floating) {
    return (
      <a
        aria-label="Agendar no WhatsApp"
        href={href}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#08a71f] text-white shadow-[0_14px_35px_rgba(8,167,31,0.42)] transition hover:-translate-y-1 hover:bg-[#12bf2c]"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-[#08a71f] px-6 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_14px_38px_rgba(8,167,31,0.28)] transition hover:-translate-y-1 hover:bg-[#12bf2c] ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {children}
    </a>
  );
}
