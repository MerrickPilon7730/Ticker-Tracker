"use client"

import { useEffect, useState } from "react";

import { getTopFourTraded } from "@/features/search/get-top-gainers-losers";
import { getStockQuote } from "@/features/search/get-stock-quote";

import { StockModal } from "@/components/stock-modal";

import { GainersLosersCard } from "./gainers-losers-card";

import { StockDataType, StockQuoteType } from "@/Schemas/api-schemas";

export const TopFourTradedGrid = () => {
  const [traded, setTraded] = useState<StockDataType[]>([]);
  const [selectedStock, setSelectedStock] = useState<StockDataType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stockQuote, setStockQuote] = useState<StockQuoteType | null>(null);

  useEffect(() => {
    getTopFourTraded().then(setTraded);
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
      <div className="grid grid-cols-2 gap-4 w-full auto-rows-min">
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
