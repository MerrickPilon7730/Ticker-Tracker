"use client"

import { Loader2 } from "lucide-react";

import {
    SignIn,
    ClerkLoading,
    ClerkLoaded,
} from "@clerk/nextjs"

export default function SignInPage() {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-cols items-center justify-center mt-20">
                <ClerkLoaded>
                    <SignIn path="/sign-in" routing="path" forceRedirectUrl="/overview"/>
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className="animate-spin text-muted foreground" />
                </ClerkLoading>
            </div>
            <div>
                {/*TODO: Add */}
            </div>
        </div>
    )
}