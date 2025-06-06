"use client"

import { useEffect, useState } from "react";

import { getTopFourGainers } from "@/features/search/api/get-market-movers";
import { getStockQuote } from "@/features/search/api/get-stock-quote";

import { StockModal } from "@/components/modal/stock-modal";

import { GainersLosersCard } from "./gainers-losers-card";

import { StockDataType, StockQuoteType } from "@/schemas/api-schemas";

export const TopFourGainersGrid = () => {
  const [gainers, setGainers] = useState<StockDataType[]>([]);
  const [selectedStock, setSelectedStock] = useState<StockDataType | null>(null);
  const [stockQuote, setStockQuote] = useState<StockQuoteType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getTopFourGainers().then(setGainers);
  }, []);

  useEffect(() => {
    if(selectedStock){
      getStockQuote(selectedStock.ticker).then(setStockQuote);
    }
  }, [selectedStock]);

  const handleCardClick = (stock: StockDataType) => {
    setSelectedStock(stock);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedStock(null);
    setStockQuote(null);
  }

  return (
     <>
      <div className="grid grid-cols-2 gap-4 w-full auto-rows-min">
        {gainers.map((stock) => (
          <GainersLosersCard
            key={stock.ticker}
            title={stock.ticker}
            stock={stock}
            onClick={() => handleCardClick(stock)}
          />
        ))}
      </div>
      <StockModal
        isOpen={isModalOpen}
        onClose={handleClose}
        stock={selectedStock}
        stockQuote={stockQuote}
      />
    </>
  );
};
