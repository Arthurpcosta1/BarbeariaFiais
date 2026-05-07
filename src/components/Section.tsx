import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  title: string;
  kicker?: string;
  className?: string;
}>;

export function Section({ id, title, kicker, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-10 sm:px-8 lg:px-12 ${className}`}>
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            {kicker ? (
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-gold">{kicker}</p>
            ) : null}
            <h2 className="font-display text-3xl uppercase leading-none text-bone sm:text-5xl">{title}</h2>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent sm:block" />
        </div>
        {children}
      </motion.div>
    </section>
  );
}
