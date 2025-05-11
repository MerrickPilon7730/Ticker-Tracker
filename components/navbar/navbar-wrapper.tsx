"use client"
import { Loader2 } from "lucide-react";

import { useUser } from "@clerk/nextjs";

import { NavbarHome } from "@/components/navbar/navbar-home";
import { NavbarDashboard } from "@/components/navbar/navbar-dashboard";
import { NavbarShell } from "@/components/navbar/components/navbar-shell";

export const NavbarWrapper = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
        <NavbarShell>
            <Loader2 />
        </NavbarShell>
    )
  };

  return isSignedIn ? <NavbarDashboard /> : <NavbarHome />;
};
