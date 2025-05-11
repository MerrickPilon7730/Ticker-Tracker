
"use client";

import { useUser } from "@clerk/nextjs";
import { NavbarHome } from "./navbar-home";
import { NavbarDashboard } from "./navbar-dashboard";

export const NavbarWrapper = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null; // optional spinner

  return isSignedIn ? <NavbarDashboard /> : <NavbarHome />;
};
