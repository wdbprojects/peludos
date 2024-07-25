import { ChartSpline, CirclePlus, Dog, House } from "lucide-react";
import { ReactNode } from "react";

type NavLink = {
  id: number;
  href: string;
  label: string;
  icon: ReactNode;
};

const links: NavLink[] = [
  { id: 1, href: "/home", label: "Home", icon: <House className="h-4 w-4" /> },
  {
    id: 2,
    href: "/agregar",
    label: "Agregar peludo",
    icon: <CirclePlus className="h-4 w-4" />,
  },
  {
    id: 3,
    href: "/peludos",
    label: "Todos los peludos",
    icon: <Dog className="h-4 w-4" />,
  },
  {
    id: 4,
    href: "/stats",
    label: "Stats",
    icon: <ChartSpline className="h-4 w-4" />,
  },
];

export default links;
