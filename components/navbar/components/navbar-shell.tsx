
import { Logo } from "@/components/navbar/components/navbar-logo";

export const NavbarShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="bg-gradient-to-b from-emerald-500 to-slate-600 py-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center lg:gap-x-16">
            <Logo />
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
};
