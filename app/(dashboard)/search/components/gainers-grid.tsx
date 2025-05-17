"use client"

import { useEffect, useState } from "react";

import {z} from "zod";

import { getTopFourGainers } from "@/features/search/get-top-gainers-losers";

import { GainersLosersCard } from "./gainers-losers-card";

import { StockData } from "@/Schemas/stock-schema";

export const TopGainersGrid = () => {
  const [gainers, setGainers] = useState<z.infer<typeof StockData>[]>([]);

  useEffect(() => {
    getTopFourGainers().then(setGainers);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 w-full auto-rows-min">
      {gainers.map((stock) => (
        <GainersLosersCard 
          key={stock.ticker}
          title={stock.ticker} 
          stock={stock} 
        />
      ))}
    </div>
  );
};
