
import { ownedStocksSchema, ownedStocksType } from "@/Schemas/user-schema";

export const getUserOwnedStocks = async (userId: string): Promise<ownedStocksType> => {
  const response = await fetch(`http://localhost:3000/api/dynamodb/users/${userId}/owned`);

  if (!response.ok) {
    throw new Error("Failed to fetch user owned stocks");
  }

  const data = await response.json();

  const parsedData = ownedStocksSchema.safeParse(data.owned);

  if (!parsedData.success) {
    throw new Error("Invalid response format");
  }

  return parsedData.data;
};
