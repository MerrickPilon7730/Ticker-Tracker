"use client"

import { useEffect, useState } from "react";

import {z} from "zod";

import { getTopFourLosers } from "@/features/search/get-top-gainers-losers";

import { StockModal } from "@/components/stock-modal";

import { GainersLosersCard } from "./gainers-losers-card";

import { StockData } from "@/Schemas/stock-schema";

export const TopLosersGrid = () => {
  const [losers, setLosers] = useState<z.infer<typeof StockData>[]>([]);
  const [selectedStock, setSelectedStock] = useState<z.infer<typeof StockData> | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getTopFourLosers().then(setLosers);
  }, []);

    const handleCardClick = (stock: z.infer<typeof StockData>) => {
    setSelectedStock(stock);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-full auto-rows-min">
        {losers.map((stock) => (
          <GainersLosersCard
            key={stock.ticker}
            title={stock.ticker}
            stock={stock}
            onclick={() => handleCardClick(stock)}
          />
        ))}
      </div>
      <StockModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        stock={selectedStock}
      />
    </>
  );
};
