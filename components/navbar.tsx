

import { Logo } from "@/components/navbar-logo";

import { Button } from "@/components/ui/button";


export const Navbar = () => {
    return (
        <nav className="bg-gradient-to-b from-slate-700 to-slate-600">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between">
                     <div className="flex items-center lg:gap-x-16">
                        <Logo />
                     </div>
                     
                </div>
                
            </div>
        </nav>
    );
}
