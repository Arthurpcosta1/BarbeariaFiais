import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Clock3, MapPin, Scissors, Sparkles, Wand2 } from "lucide-react";

export type Service = {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  icon: LucideIcon;
};

export const whatsappNumber = "5585999999999";

export const services: Service[] = [
  {
    id: "cabelo",
    name: "Cabelo",
    price: "R$ 35,00",
    duration: "45 min",
    description: "Corte alinhado e finalizacao no estilo.",
    icon: Scissors,
  },
  {
    id: "barba",
    name: "Barba",
    price: "R$ 30,00",
    duration: "35 min",
    description: "Barba desenhada com navalha e acabamento limpo.",
    icon: Wand2,
  },
  {
    id: "combo",
    name: "Combo",
    price: "R$ 50,00",
    duration: "1h 15min",
    description: "Cabelo e barba no mesmo atendimento.",
    icon: BadgeCheck,
  },
  {
    id: "barboterapia",
    name: "Barboterapia",
    price: "R$ 45,00",
    duration: "50 min",
    description: "Cuidado relaxante para pele e barba.",
    icon: Sparkles,
  },
  {
    id: "acabamento",
    name: "Acabamento",
    price: "R$ 20,00",
    duration: "20 min",
    description: "Contornos e laterais para manter o corte.",
    icon: Clock3,
  },
  {
    id: "sobrancelhas",
    name: "Sobrancelhas",
    price: "R$ 15,00",
    duration: "15 min",
    description: "Limpeza discreta e alinhada.",
    icon: MapPin,
  },
];

export const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

export const gallery = [
  {
    alt: "Corte degradado com risca lateral feito na Barbearia Fiais",
    src: "/images/baiano1.jpeg",
  },
  {
    alt: "Corte alto modelado feito na Barbearia Fiais",
    src: "/images/baiano2.jpeg",
  },
  {
    alt: "Cabelo e barba alinhados na Barbearia Fiais",
    src: "/images/baiano3.jpeg",
  },
];
