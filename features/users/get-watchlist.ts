
import { watchList, watchListType } from "@/Schemas/user-schema";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getUserWatchList = async (userId: string): Promise<watchListType> => {
  const response = await fetch(`${BASE_URL}/api/dynamodb/users/${userId}/watchlist`);

  if (!response.ok) {
    throw new Error("Failed to fetch user owned stocks");
  }

  const data = await response.json();

  const parsedData = watchList.safeParse(data.watchList);

  if (!parsedData.success) {
    throw new Error("Invalid response format");
  }

  return parsedData.data;
};
