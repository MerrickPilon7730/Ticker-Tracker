
import { watchList, watchListType } from "@/Schemas/user-schema";

export const getUserWatchList = async (userId: string): Promise<watchListType> => {
  const response = await fetch(`http://localhost:3000/api/dynamodb/watchlist/${userId}`);

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
