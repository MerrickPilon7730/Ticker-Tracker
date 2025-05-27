"use client"

import { useEffect, useState } from "react";

import { getMostActivelyTraded } from "@/features/search/api/get-top-gainers-losers";
import { getStockQuote } from "@/features/search/api/get-stock-quote";

import { StockModal } from "@/components/stock-modal";

import { GainersLosersCard } from "./gainers-losers-card";

import { StockDataType, StockQuoteType } from "@/Schemas/api-schemas";

export const TopTradedGrid = () => {
  const [traded, setTraded] = useState<StockDataType[]>([]);
  const [selectedStock, setSelectedStock] = useState<StockDataType | null>(null);
  const [stockQuote, setStockQuote] = useState<StockQuoteType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getMostActivelyTraded().then(setTraded);
  }, []);

  useEffect(() => {
    if (selectedStock){
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
      <div className="grid grid-cols-4 gap-4 w-full auto-rows-min">
        {traded.map((stock) => (
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
