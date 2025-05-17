"use client"

import { useEffect, useState } from "react";

import {z} from "zod";

import { getTopFourTraded } from "@/features/search/get-top-gainers-losers";

import { GainersLosersCard } from "./gainers-losers-card";

import { StockData } from "@/Schemas/stock-schema";

export const TopTradedGrid = () => {
  const [traded, setTraded] = useState<z.infer<typeof StockData>[]>([]);

  useEffect(() => {
    getTopFourTraded().then(setTraded);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 w-full auto-rows-min">
      {traded.map((stock) => (
        <GainersLosersCard 
          key={stock.ticker}
          title={stock.ticker} 
          stock={stock} 
        />
      ))}
    </div>
  );
};
