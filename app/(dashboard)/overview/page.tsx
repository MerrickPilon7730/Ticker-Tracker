
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function OverviewPage() {
    const { userId } = await auth();
    const user = await currentUser();

    return (
        <div>
            Welcome, {user?.firstName}, {userId}
        </div>
    );
};