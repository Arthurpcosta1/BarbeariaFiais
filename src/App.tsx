import { AnimatePresence, motion } from "framer-motion";
import { Clock3, Instagram, MapPin, MessageCircle, Scissors } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { LogoMark } from "./components/LogoMark";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { gallery, services, timeSlots, whatsappNumber } from "./data/barbershop";

const navItems = [
  { label: "Servicos", href: "#servicos" },
  { label: "Agenda", href: "#agenda" },
  { label: "Fotos", href: "#fotos" },
  { label: "Contato", href: "#contato" },
];

function buildWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const [selectedTime, setSelectedTime] = useState("15:00");

  const selectedService = useMemo(
    () => services.find((service) => service.id === selectedServiceId) ?? services[0],
    [selectedServiceId],
  );

  const whatsappMessage = `Ola, gostaria de agendar ${selectedService.name.toLowerCase()} amanha as ${selectedTime}.`;
  const whatsappLink = buildWhatsAppLink(whatsappMessage);
  const genericWhatsAppLink = buildWhatsAppLink("Ola, gostaria de agendar um horario na Barbearia Fiais.");

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  function handleConfirmBooking() {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-coal text-bone selection:bg-gold selection:text-navyDeep">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-navyDeep"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="text-center">
              <div className="mx-auto mb-5 h-14 w-14 rounded-full border border-gold/30 border-t-gold animate-spin" />
              <p className="font-display text-2xl uppercase tracking-[0.18em] text-goldSoft">Barbearia Fiais</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-gold/16 bg-navyDeep/86 px-4 py-3 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a href="#top" className="font-display text-xl uppercase tracking-[0.12em] text-goldSoft">
            Fiais
          </a>
          <div className="hidden items-center gap-5 text-xs font-black uppercase tracking-[0.18em] text-bone/70 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-gold">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={genericWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gold/45 px-4 py-2 text-xs font-black uppercase tracking-wide text-gold transition hover:border-gold hover:bg-gold hover:text-navyDeep"
          >
            Agendar
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative isolate px-4 pb-8 pt-20 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_12%,rgba(199,167,103,0.18),transparent_28%),linear-gradient(180deg,#041827_0%,#082338_50%,#061d2e_100%)]" />
          <div className="mx-auto grid max-w-6xl gap-7 lg:min-h-[690px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="order-2 lg:order-1"
            >
              <h1 className="font-display text-[clamp(3.25rem,16vw,7.8rem)] uppercase leading-[0.78] text-goldSoft">
                Barbearia
                <span className="block text-gold">Fiais</span>
              </h1>
              <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-bone/82 sm:text-xl">
                Corte alinhado, barba no capricho e atendimento com hora marcada desde 2018.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton href={genericWhatsAppLink} />
                <a
                  href="#agenda"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/38 px-6 py-4 text-sm font-black uppercase tracking-wide text-gold transition hover:-translate-y-1 hover:bg-gold hover:text-navyDeep"
                >
                  <Clock3 className="h-5 w-5" />
                  Ver horarios
                </a>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-md border border-gold/20 bg-navy/80 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.26em] text-gold">Seg a Sab</p>
                  <p className="mt-1 font-display text-2xl uppercase text-white">9:00 - 19:00</p>
                </div>
                <div className="rounded-md border border-gold/20 bg-navy/80 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.26em] text-gold">Desde</p>
                  <p className="mt-1 font-display text-2xl uppercase text-white">2018</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65 }}
            >
              <LogoMark />
            </motion.div>
          </div>
        </section>

        <section id="servicos" className="px-4 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.86fr_1.14fr]">
            <motion.div
              className="rounded-lg border border-gold/24 bg-[linear-gradient(160deg,#123b59,#082338)] p-5 shadow-gold"
              initial={{ y: 18 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 text-center">
                <p className="font-display text-3xl uppercase text-goldSoft">Barbearia Fiais</p>
                <p className="text-[10px] font-black uppercase tracking-[0.34em] text-gold/80">Desde 2018</p>
              </div>
              <div className="space-y-3">
                {services.map((service) => (
                  <div key={service.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                    <span className="font-display text-xl uppercase text-goldSoft sm:text-2xl">{service.name}</span>
                    <span className="border-t border-dashed border-goldSoft/45" />
                    <span className="rounded-md bg-goldSoft px-3 py-1.5 font-display text-xl text-white">
                      {service.price.replace("R$ ", "")}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              id="agenda"
              className="rounded-lg border border-gold/20 bg-navy/72 p-5"
              initial={{ y: 18 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.26em] text-gold">Agenda rapida</p>
                  <h2 className="mt-1 font-display text-3xl uppercase text-white">Escolha e confirme</h2>
                </div>
                <Scissors className="h-7 w-7 text-gold" />
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {services.slice(0, 6).map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    aria-label={`Selecionar ${service.name}`}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`rounded-md border px-3 py-3 text-left transition hover:-translate-y-0.5 ${
                      selectedServiceId === service.id
                        ? "border-gold bg-gold text-navyDeep"
                        : "border-gold/14 bg-navyDeep/44 text-white hover:border-gold/55"
                    }`}
                  >
                    <span className="block font-display text-xl uppercase">{service.name}</span>
                    <span className="text-xs font-black opacity-80">{service.price}</span>
                  </button>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-8">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    aria-label={`Selecionar horario ${time}`}
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-md border py-3 text-sm font-black transition hover:-translate-y-0.5 ${
                      selectedTime === time
                        ? "border-crimson bg-crimson text-white"
                        : "border-gold/14 bg-navyDeep/44 text-white hover:border-gold/55"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-md border border-gold/18 bg-navyDeep/54 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-gold">Selecionado</p>
                    <p className="font-display text-2xl uppercase text-white">
                      {selectedService.name} - {selectedTime}
                    </p>
                  </div>
                  <p className="font-display text-2xl text-goldSoft">{selectedService.price}</p>
                </div>
                <button
                  type="button"
                  onClick={handleConfirmBooking}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#08a71f] px-5 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_14px_38px_rgba(8,167,31,0.25)] transition hover:-translate-y-1 hover:bg-[#12bf2c]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Confirmar no WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="fotos" className="px-4 py-7 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-5 flex items-end justify-between gap-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gold">Fotos reais</p>
                <h2 className="font-display text-4xl uppercase text-white">Cortes da casa</h2>
              </div>
              <div className="hidden h-px flex-1 bg-gold/35 sm:block" />
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {gallery.map((image) => (
                <motion.figure
                  key={image.src}
                  className="group aspect-[3/4] overflow-hidden rounded-lg border border-gold/18 bg-navy sm:aspect-[4/5]"
                  whileHover={{ y: -4 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="px-4 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-6xl gap-4 rounded-lg border border-gold/18 bg-navy/72 p-5 md:grid-cols-[1.1fr_1fr_auto] md:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gold">Sobre</p>
              <h2 className="mt-1 font-display text-3xl uppercase text-white">Atendimento simples</h2>
              <p className="mt-3 leading-7 text-bone/72">
                Corte, barba e acabamento em uma experiencia direta, organizada e fiel ao estilo da Fiais desde 2018.
              </p>
            </div>
            <div className="space-y-3 md:justify-self-center">
              <p className="flex items-center gap-2 text-bone/80">
                <Clock3 className="h-5 w-5 text-gold" />
                Segunda a sabado, 9:00 - 19:00
              </p>
              <p className="flex items-center gap-2 text-bone/80">
                <MapPin className="h-5 w-5 text-gold" />
                Sítio São Braz, 130 - Sítio dos Pintos, Recife
              </p>
              <a className="inline-flex items-center gap-2 text-bone/80 transition hover:text-gold" href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="h-5 w-5 text-gold" />
                Instagram
              </a>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=S%C3%ADtio%20S%C3%A3o%20Braz%2C%20130%20-%20S%C3%ADtio%20dos%20Pintos%2C%20Recife"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/35 px-5 py-4 text-sm font-black uppercase tracking-wide text-gold transition hover:bg-gold hover:text-navyDeep"
            >
              <MapPin className="h-5 w-5" />
              Abrir mapa
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-gold/12 px-5 py-6 text-center text-sm text-bone/58">
        <p className="font-display text-2xl uppercase text-goldSoft">Barbearia Fiais</p>
        <p className="mt-1">Desde 2018 em Sítio dos Pintos, Recife.</p>
      </footer>

      <WhatsAppButton href={genericWhatsAppLink} floating />
    </div>
  );
}

export default App;
