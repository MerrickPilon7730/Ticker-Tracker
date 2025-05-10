
import Link from "next/link";

import {Button} from "@/components/ui/button";

const navLinks = [
    {
        name: "Home",
        path: "/",
    },
];

export const NavbarItems = () => {
  return (
    <div className="flex items-center gap-x-2">
        {navLinks.map((link) => (
            
        ))}

    </div>
  );
};