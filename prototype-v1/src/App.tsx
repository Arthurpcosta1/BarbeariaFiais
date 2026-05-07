import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarCheck,
  Clock3,
  Instagram,
  MapPin,
  MessageCircle,
  Scissors,
  Star,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { LogoMark } from "./components/LogoMark";
import { Section } from "./components/Section";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { gallery, services, timeSlots, whatsappNumber } from "./data/barbershop";

const navItems = ["Servicos", "Galeria", "Sobre", "Agenda", "Local"];

function buildWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const [selectedTime, setSelectedTime] = useState(timeSlots[4]);

  const selectedService = useMemo(
    () => services.find((service) => service.id === selectedServiceId) ?? services[0],
    [selectedServiceId],
  );

  const whatsappMessage = `Olá, gostaria de agendar ${selectedService.name.toLowerCase()} amanhã às ${selectedTime}.`;
  const whatsappLink = buildWhatsAppLink(whatsappMessage);
  const genericWhatsAppLink = buildWhatsAppLink("Olá, gostaria de agendar um horário na Barbearia Fiais.");

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  function handleConfirmBooking() {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-coal text-bone selection:bg-gold selection:text-coal">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-coal"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="text-center">
              <div className="mx-auto mb-5 h-16 w-16 rounded-full border border-gold/30 border-t-gold animate-spin" />
              <p className="font-display text-2xl uppercase tracking-[0.18em] text-bone">Barbearia Fiais</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-coal/78 px-5 py-3 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-5">
          <a href="#top" className="font-display text-xl uppercase tracking-[0.12em] text-white">
            Fiais
          </a>
          <div className="hidden items-center gap-6 text-xs font-bold uppercase tracking-[0.18em] text-white/62 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-gold">
                {item}
              </a>
            ))}
          </div>
          <a
            href={genericWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gold/45 px-4 py-2 text-xs font-black uppercase tracking-wide text-gold transition hover:border-gold hover:bg-gold hover:text-coal"
          >
            Agendar
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative isolate min-h-[92svh] overflow-hidden px-5 pb-12 pt-24 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_12%,rgba(199,167,103,0.16),transparent_26%),linear-gradient(180deg,#090909_0%,#070707_56%,#101014_100%)]" />
          <div className="absolute left-[12%] top-0 -z-10 h-80 w-4 bg-gradient-to-b from-transparent via-gold to-transparent blur-sm" />
          <div className="absolute right-[14%] top-0 -z-10 h-96 w-4 bg-gradient-to-b from-transparent via-crimson to-transparent blur-md" />

          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="order-2 lg:order-1"
            >
              <h1 className="font-display text-[clamp(3.9rem,18vw,8.4rem)] uppercase leading-[0.78] text-white">
                Barbearia
                <span className="block text-gold">Fiais</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/76 sm:text-xl">
                Corte afiado, barba alinhada e atendimento direto no ponto para quem valoriza presença.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton href={genericWhatsAppLink} />
                <a
                  href="#agenda"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/16 px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-1 hover:border-gold hover:text-gold"
                >
                  <CalendarCheck className="h-5 w-5" />
                  Ver horarios
                </a>
              </div>
              <div className="mt-8 grid max-w-lg grid-cols-2 gap-3">
                <div className="border-l-2 border-gold bg-white/[0.04] px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/48">Segunda a sábado</p>
                  <p className="mt-1 font-display text-2xl text-white">9:00 as 19:00</p>
                </div>
                <div className="border-l-2 border-crimson bg-white/[0.04] px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/48">Atendimento</p>
                  <p className="mt-1 font-display text-2xl text-white">Com hora marcada</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 pt-3 lg:order-2"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <LogoMark />
              <div className="mx-auto mt-7 max-w-md rounded-xl border border-white/10 bg-black/48 p-4 shadow-gold backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">Aberto hoje</p>
                    <p className="mt-1 text-sm text-white/72">Agende pelo WhatsApp em poucos segundos.</p>
                  </div>
                  <Star className="h-8 w-8 fill-gold text-gold" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Section id="servicos" title="Servicos" kicker="Tabela presencial">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.id}
                  className="group rounded-lg border border-white/10 bg-gradient-to-br from-[#123552] to-[#0c2338] p-5 shadow-[inset_0_0_0_1px_rgba(199,167,103,0.08)] transition hover:-translate-y-1 hover:border-gold/55 hover:shadow-gold"
                  initial={{ y: 16 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-md bg-gold text-coal">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-md bg-goldSoft px-3 py-2 font-display text-xl text-white shadow-[inset_0_-12px_0_rgba(0,0,0,0.08)]">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-end gap-3">
                    <h3 className="font-display text-3xl uppercase text-goldSoft">{service.name}</h3>
                    <span className="mb-2 h-px flex-1 border-t border-dashed border-goldSoft/55" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/68">{service.description}</p>
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">
                    <Clock3 className="h-4 w-4 text-gold" />
                    {service.duration}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </Section>

        <Section id="galeria" title="Galeria" kicker="Cortes e barbas">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {gallery.map((image, index) => (
              <motion.figure
                key={image.src}
                className={`group overflow-hidden rounded-lg border border-white/10 bg-smoke ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
                whileHover={{ y: -5 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full min-h-44 w-full object-cover grayscale-[30%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </motion.figure>
            ))}
          </div>
        </Section>

        <Section id="sobre" title="Sobre" kicker="A casa">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="rounded-lg border border-gold/25 bg-black/35 p-6">
              <LogoMark />
            </div>
            <div>
              <p className="max-w-2xl text-xl leading-9 text-white/78">
                A Barbearia Fiais une acabamento preciso, atendimento simples e ambiente masculino premium.
                Cada servico foi pensado para resolver rapido, manter o visual no ponto e entregar uma
                experiencia direta, elegante e sem complicacao.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Navalha", "Degrade", "Barba"].map((item) => (
                  <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <Scissors className="mb-3 h-5 w-5 text-gold" />
                    <p className="font-display text-2xl uppercase text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="agenda" title="Agendamento" kicker="Simples e rapido">
          <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <h3 className="font-display text-2xl uppercase text-white">Escolha o servico</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    aria-label={`Selecionar ${service.name}`}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`rounded-md border p-4 text-left transition hover:-translate-y-1 ${
                      selectedServiceId === service.id
                        ? "border-gold bg-gold text-coal"
                        : "border-white/10 bg-black/30 text-white hover:border-gold/50"
                    }`}
                  >
                    <span className="block font-display text-2xl uppercase">{service.name}</span>
                    <span className="mt-1 block text-sm font-bold opacity-80">
                      {service.price} · {service.duration}
                    </span>
                  </button>
                ))}
              </div>

              <h3 className="mt-8 font-display text-2xl uppercase text-white">Escolha o horario</h3>
              <div className="mt-5 grid grid-cols-4 gap-3 sm:grid-cols-8">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    aria-label={`Selecionar horario ${time}`}
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-md border py-3 text-sm font-black transition hover:-translate-y-1 ${
                      selectedTime === time
                        ? "border-crimson bg-crimson text-white"
                        : "border-white/10 bg-black/30 text-white hover:border-crimson/60"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <aside className="rounded-lg border border-gold/28 bg-[linear-gradient(145deg,rgba(199,167,103,0.14),rgba(183,31,45,0.09),rgba(255,255,255,0.04))] p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-gold">Resumo</p>
              <h3 className="mt-3 font-display text-4xl uppercase text-white">{selectedService.name}</h3>
              <p className="mt-2 text-white/68">{selectedService.description}</p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-white/58">Valor</span>
                  <strong className="text-goldSoft">{selectedService.price}</strong>
                </p>
                <p className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-white/58">Horario</span>
                  <strong className="text-white">{selectedTime}</strong>
                </p>
              </div>
              <button
                type="button"
                onClick={handleConfirmBooking}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#08a71f] px-5 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_14px_38px_rgba(8,167,31,0.28)] transition hover:-translate-y-1 hover:bg-[#12bf2c]"
              >
                <MessageCircle className="h-5 w-5" />
                Confirmar no WhatsApp
              </button>
              <p className="mt-4 text-center text-xs leading-5 text-white/48">{whatsappMessage}</p>
            </aside>
          </div>
        </Section>

        <Section id="horarios" title="Horarios" kicker="Funcionamento">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Segunda", "09:00 - 19:00"],
              ["Terca a Sexta", "09:00 - 19:00"],
              ["Sabado", "09:00 - 19:00"],
              ["Domingo", "Fechado"],
            ].map(([day, hour]) => (
              <div key={day} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <Clock3 className="mb-4 h-6 w-6 text-gold" />
                <p className="font-display text-2xl uppercase text-white">{day}</p>
                <p className="mt-2 text-white/64">{hour}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="local" title="Localizacao" kicker="Venha ate a Fiais">
          <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <MapPin className="mb-4 h-8 w-8 text-gold" />
              <h3 className="font-display text-3xl uppercase text-white">Barbearia Fiais</h3>
              <p className="mt-4 leading-7 text-white/68">
                Rua Principal, 123
                <br />
                Centro, Fortaleza - CE
              </p>
              <WhatsAppButton href={genericWhatsAppLink} className="mt-6 w-full" />
            </div>
            <div className="min-h-[320px] overflow-hidden rounded-lg border border-white/10 bg-smoke">
              <iframe
                title="Mapa da Barbearia Fiais"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-38.5584%2C-3.7485%2C-38.5000%2C-3.7050&layer=mapnik&marker=-3.7319%2C-38.5267"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full grayscale invert-[0.88] contrast-125"
              />
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-white/62 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-2xl uppercase text-white">Barbearia Fiais</p>
          <div className="flex flex-wrap gap-4">
            <a className="inline-flex items-center gap-2 transition hover:text-gold" href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-gold" href={genericWhatsAppLink} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Rua Principal, 123
            </span>
          </div>
        </div>
      </footer>

      <WhatsAppButton href={genericWhatsAppLink} floating />
    </div>
  );
}

export default App;
