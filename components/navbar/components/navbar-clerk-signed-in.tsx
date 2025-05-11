
import { Loader2 } from "lucide-react";

import {
    ClerkLoaded,
    UserButton,
    ClerkLoading,
} from "@clerk/nextjs";

export const NavbarClerkSignedIn =() => {
    return (
        <div>
            <ClerkLoaded>
                <UserButton />
            </ClerkLoaded>
            <ClerkLoading>
                <Loader2 className="size-8 animate-spin text-slate-400"></Loader2>
            </ClerkLoading>
        </div>
    );
};