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
    description: "Corte alinhado, acabamento preciso e finalizacao no estilo.",
    icon: Scissors,
  },
  {
    id: "barba",
    name: "Barba",
    price: "R$ 30,00",
    duration: "35 min",
    description: "Barba desenhada com toalha quente, navalha e balm.",
    icon: Wand2,
  },
  {
    id: "combo",
    name: "Combo",
    price: "R$ 50,00",
    duration: "1h 15min",
    description: "Cabelo e barba no mesmo atendimento, com acabamento completo.",
    icon: BadgeCheck,
  },
  {
    id: "barboterapia",
    name: "Barboterapia",
    price: "R$ 45,00",
    duration: "50 min",
    description: "Experiencia relaxante com cuidado de pele e barba premium.",
    icon: Sparkles,
  },
  {
    id: "acabamento",
    name: "Acabamento",
    price: "R$ 20,00",
    duration: "20 min",
    description: "Contornos, pe e laterais para manter o corte em dia.",
    icon: Clock3,
  },
  {
    id: "sobrancelhas",
    name: "Sobrancelhas",
    price: "R$ 15,00",
    duration: "15 min",
    description: "Limpeza e alinhamento discreto para valorizar o rosto.",
    icon: MapPin,
  },
];

export const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

export const gallery = [
  {
    alt: "Corte masculino degradê com acabamento premium",
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
  },
  {
    alt: "Barba alinhada feita com navalha",
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
  },
  {
    alt: "Barbeiro finalizando corte masculino",
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  },
  {
    alt: "Detalhe de cadeira de barbearia premium",
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80",
  },
];
