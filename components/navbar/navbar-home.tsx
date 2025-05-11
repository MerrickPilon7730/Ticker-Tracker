"use client"

import { Logo } from "@/components/navbar/components/navbar-logo";
import { NavbarItemsHome } from "@/components/navbar/components/navbar-home-items";
import { NavbarClerkSignedOut } from "@/components/navbar/components/navbar-clerk-signed-out";



export const NavbarHome = () => {
        return (
        <nav className="bg-gradient-to-b from-emerald-500 to-slate-600 py-10">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between">
                     <div className="flex items-center lg:gap-x-16">
                        <Logo />
                        <NavbarItemsHome />
                     </div>
                    <div>
                        <NavbarClerkSignedOut />
                    </div>
                </div>
            </div>
        </nav>
    );
};
