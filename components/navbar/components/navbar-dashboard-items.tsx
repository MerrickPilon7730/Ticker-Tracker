
import { usePathname } from "next/navigation";

import { NavButton } from "@/components/navbar/components/navbar-button";

const navLinks = [
    {
        name: "Overview",
        href: "/overview",
    },
    {
        name: "Owned",
        href: "/owned"
    },
    {
        name: "Search",
        href: "/search"
    },
];

export const NavbarItemsDashboard = () => {
    const pathname = usePathname();

  return (
    <div className="flex items-center gap-x-2 text-white">
        {navLinks.map((link) => (
            <NavButton 
                key={link.href}
                href={link.href}
                label={link.name}
                isActive={link.href === pathname}
            />
        ))}
    </div>
  );
};