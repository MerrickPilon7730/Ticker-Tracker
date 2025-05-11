"use client"

import { Loader2 } from "lucide-react";

import {
    SignIn,
    ClerkLoading,
    ClerkLoaded,
} from "@clerk/nextjs"

export default function SignInPage() {
    return (
        <div className="grid grid-cols-2 min-h-screen">
            <div className="flex flex-cols items-center justify-center">
                <ClerkLoaded>
                    <SignIn path="/sign-in" routing="path" forceRedirectUrl="/dashboard"/>
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className="animate-spin text-muted foreground" />
                </ClerkLoading>
            </div>
            <div>

            </div>
        </div>
    )
}