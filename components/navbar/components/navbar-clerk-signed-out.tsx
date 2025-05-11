
import { usePathname } from "next/navigation"

import { NavButton } from "@/components/navbar/components/navbar-button"

const clerkLinks = [
    {
        name: "Sign In",
        href: "/sign-in"
    },
    {
        name: "Sign Up",
        href: "/sign-up"
    }
]


export const NavbarClerkSignedOut = () => {
    const pathname = usePathname();

    return (
        <div className="flex items-center gap-x-2 text-white">
            {clerkLinks.map((link) => (
                <NavButton 
                    key={link.href}
                    href={link.href}
                    label={link.name}
                    isActive={link.href === pathname}
                />
            ))}
        </div>
    )
}