
import { StockDataType, StockQuoteType, TimeSeriesDailyType } from "@/schemas/api-schemas";
import { LineChartVariant } from "../graphs/linechart";

type StockDetailsProps = {
  stock: StockDataType;
  stockQuote: StockQuoteType | null;
  timeSeries: TimeSeriesDailyType | null;
};

export const StockDetails = ({ stock, stockQuote, timeSeries }: StockDetailsProps) => (
    <div className="grid grid-cols-2 gap-x-8">
        <div>
            {timeSeries ? (
                <LineChartVariant data={timeSeries} />
            ) : (
                <p className="text-white">Loading chart...</p>
            )}
        </div>
        <div>
            <p><strong>Price:</strong> ${Number(stock.price).toFixed(2)}</p>
            <p><strong>Change:</strong> ${Number(stock.change_amount).toFixed(2)}</p>
            <p>
                <strong>Change %:</strong> 
                {( () => {
                    const cleaned = stock.change_percentage.replace(/%/g, "");
                    const num = Number(cleaned);
                    return isNaN(num) ? stock.change_percentage : num.toFixed(2);
                })()}%
            </p>
            <p><strong>High:</strong> ${Number(stockQuote?.high).toFixed(2)}</p>
            <p><strong>Low:</strong> ${Number(stockQuote?.low).toFixed(2)}</p>
            <p><strong>Previous Close:</strong> ${Number(stockQuote?.previous_close).toFixed(2)}</p>
        </div>
    </div>
    
);
