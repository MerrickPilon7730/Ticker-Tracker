"use client"

import { Loader2 } from "lucide-react";

import {
    SignUp,
    ClerkLoading,
    ClerkLoaded,
} from "@clerk/nextjs"

export default function SignUpPage() {
    return (
        <div className="grid grid-cols-2 min-h-screen">
            <div className="flex flex-cols items-center justify-center">
                <ClerkLoaded>
                    <SignUp path="/sign-up"/>
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className="animate-spin text-muted foreground" />
                </ClerkLoading>
            </div>
        </div>
    )
}