import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href="/">
            <div className="items-center lg:flex">
                <Image src="/ticker-tracker-logo.svg" alt='Logo' height={28} width={28} className="hidden lg:flex"></Image>
                <p className="font-semibold text-white text-2xl ml-4">
                    Ticker Tracker
                </p>
            </div>
        </Link>
    );
};