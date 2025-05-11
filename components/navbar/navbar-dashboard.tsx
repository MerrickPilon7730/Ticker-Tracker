"use client"

import { Logo } from "@/components/navbar/components/navbar-logo";
import { NavbarItemsDashboard } from "@/components/navbar/components/navbar-dashboard-items";
import { NavbarClerkSignedIn } from "@/components/navbar/components/navbar-clerk-signed-in";



export const NavbarDashboard = () => {
        return (
        <nav className="bg-gradient-to-b from-emerald-500 to-slate-600 py-10">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between">
                     <div className="flex items-center lg:gap-x-16">
                        <Logo />
                        <NavbarItemsDashboard />
                     </div>
                    <div>
                        <NavbarClerkSignedIn />
                    </div>
                </div>
            </div>
        </nav>
    );
};
