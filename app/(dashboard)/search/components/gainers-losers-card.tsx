
import {z} from "zod";

import { StockData } from "@/Schemas/stock-schema";

import { 
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type StockProps = {
  title: string;
  stock: z.infer<typeof StockData>;
};

export const GainersLosersCard = ({ title, stock}: StockProps) => {
  const changeAmount = Number(stock.change_amount);
  const isGain = changeAmount >=0;

  const prefix = isGain ? "+" : "-";
  const bgColor = (isGain ? "bg-emerald-500 hover:bg-emerald-400": "bg-red-500 hover:bg-red-400")

  return (
    <Card className={`${bgColor} border-none py-2`}>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl">{title}</h1>
            <p>{prefix}{( () => {
              const cleaned = stock.change_percentage.replace(/%/g, "");
              const num = Number(cleaned);
              return isNaN(num) ? stock.change_percentage : num.toFixed(2);
              })()}%
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 items-center justify-center">
        <div className="flex justify-between">
          <p>{prefix}${Number(stock.change_amount).toFixed(2)}</p>
          <p>${Number(stock.price).toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
};
