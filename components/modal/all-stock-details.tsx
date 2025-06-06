
import { StockQuoteType } from "@/schemas/api-schemas";

type AllStockDetailsProps = {
  stockQuote: StockQuoteType | null;
};

export const AllStockDetails = ({ stockQuote }: AllStockDetailsProps) => (
  <div>
    <p><strong>Currency:</strong> {stockQuote?.currency}</p>
    <p><strong>High:</strong> ${Number(stockQuote?.high).toFixed(2)}</p>
  </div>
);
