"use client"

import { useEffect, useState } from "react";

import { getTopFourGainers } from "@/features/search/get-top-gainers-losers";

import { StockModal } from "@/components/stock-modal";

import { GainersLosersCard } from "./gainers-losers-card";

import { StockDataType } from "@/Schemas/stock-schema";

export const TopGainersGrid = () => {
  const [gainers, setGainers] = useState<StockDataType[]>([]);
  const [selectedStock, setSelectedStock] = useState<StockDataType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getTopFourGainers().then(setGainers);
  }, []);

  const handleCardClick = (stock: StockDataType) => {
    setSelectedStock(stock);
    setIsModalOpen(true);
  };

  return (
     <>
      <div className="grid grid-cols-2 gap-4 w-full auto-rows-min">
        {gainers.map((stock) => (
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
