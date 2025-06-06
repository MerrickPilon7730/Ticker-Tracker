
import { OwnedStocksSchema, OwnedStocksType } from "@/schemas/user-schema";

export const getUserOwnedStocks = async (userId: string): Promise<OwnedStocksType> => {
  const response = await fetch(`/api/dynamodb/users/${userId}/owned`);

  if (!response.ok) {
    throw new Error("Failed to fetch user owned stocks");
  }

  const data = await response.json();

  const parsedData = OwnedStocksSchema.safeParse(data.owned);

  if (!parsedData.success) {
    throw new Error("Invalid response format");
  }

  return parsedData.data;
};
