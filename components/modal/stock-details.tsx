
import { StockDataType, StockQuoteType } from "@/schemas/api-schemas";

type StockDetailsProps = {
  stock: StockDataType;
  stockQuote: StockQuoteType | null;
};

export const StockDetails = ({ stock, stockQuote }: StockDetailsProps) => (
  <div>
    <p><strong>Price:</strong> ${Number(stock.price).toFixed(2)}</p>
    <p><strong>Change:</strong> ${Number(stock.change_amount).toFixed(2)}</p>
    <p><strong>Change %:</strong> {stock.change_percentage}</p>
    <p><strong>High:</strong> ${Number(stockQuote?.high).toFixed(2)}</p>
    <p><strong>Low:</strong> ${Number(stockQuote?.low).toFixed(2)}</p>
    <p><strong>Previous Close:</strong> ${Number(stockQuote?.previous_close).toFixed(2)}</p>
  </div>
);
