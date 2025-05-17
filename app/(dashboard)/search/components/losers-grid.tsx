"use client"

import { useEffect, useState } from "react";

import {z} from "zod";

import { getTopFourLosers } from "@/features/search/get-top-gainers-losers";

import { GainersLosersCard } from "./gainers-losers-card";

import { StockData } from "@/Schemas/stock-schema";

export const TopLosersGrid = () => {
  const [losers, setLosers] = useState<z.infer<typeof StockData>[]>([]);

  useEffect(() => {
    getTopFourLosers().then(setLosers);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 w-full auto-rows-min">
      {losers.map((stock) => (
        <GainersLosersCard 
          key={stock.ticker}
          title={stock.ticker} 
          stock={stock} 
        />
      ))}
    </div>
  );
};
