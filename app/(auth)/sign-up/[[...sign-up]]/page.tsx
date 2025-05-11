"use client"

import { Loader2 } from "lucide-react";

import {
    SignUp,
    ClerkLoading,
    ClerkLoaded,
} from "@clerk/nextjs"

export default function SignUpPage() {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-cols items-center justify-center mt-20">
                <ClerkLoaded>
                    <SignUp path="/sign-up"/>
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