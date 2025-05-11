import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type Props = {
    href: string,
    label: string,
    isActive: boolean,
};

export const NavButton = ({href, label, isActive}: Props) => {
    return (
        <Button
            asChild
            size="sm"
            variant="outline"
            className={cn(
                "hover:bg-emerald-300 border-none",
                isActive ? "bg-emerald-400 font-bold" : "bg-transparent"

            )}
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
};