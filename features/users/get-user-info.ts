
import { UserInfo, UserInfoType } from "@/Schemas/user-schema";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getUserInfo = async (userId: string): Promise<UserInfoType> => {
    const response = await fetch(`${BASE_URL}/api/dynamodb/users/${userId}/info`);

    if (!response.ok){
        throw new Error("Failed to fetch user data");
    };

    const data = await response.json();

    const parsedData = UserInfo.safeParse(data.userInfo);

    if (!parsedData.success) {
        throw new Error("Invalid response format");
    };

    return parsedData.data;
}