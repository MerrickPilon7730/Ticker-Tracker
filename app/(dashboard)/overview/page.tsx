
import { createClerkClient, type User } from "@clerk/backend"
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function OverviewPage() {
    const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY! });

    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }


    const user: User = await clerk.users.getUser(userId);

    return (
        <div>
            Welcome, {user?.firstName}
        </div>
    );
};