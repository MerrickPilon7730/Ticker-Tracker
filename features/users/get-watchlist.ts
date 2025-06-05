
import { WatchList, WatchListType } from "@/Schemas/user-schema";

export const getUserWatchList = async (userId: string): Promise<WatchListType> => {
  const response = await fetch(`/api/dynamodb/users/${userId}/watchlist`);

  if (!response.ok) {
    throw new Error("Failed to fetch user owned stocks");
  }

  const data = await response.json();

  const parsedData = WatchList.safeParse(data.watchList);

  if (!parsedData.success) {
    throw new Error("Invalid response format");
  }

  return parsedData.data;
};
