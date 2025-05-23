"use client"

import { useEffect, useState } from "react";

import { getTopFourTraded } from "@/features/search/get-top-gainers-losers";

import { StockModal } from "@/components/stock-modal";

import { GainersLosersCard } from "./gainers-losers-card";

import { StockDataType } from "@/Schemas/stock-schema";

export const TopTradedGrid = () => {
  const [traded, setTraded] = useState<StockDataType[]>([]);
   const [selectedStock, setSelectedStock] = useState<StockDataType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getTopFourTraded().then(setTraded);
  }, []);

  const handleCardClick = (stock: StockDataType) => {
    setSelectedStock(stock);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-full auto-rows-min">
        {traded.map((stock) => (
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
