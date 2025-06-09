"use client"

import { useEffect, useState } from "react";

import { getTopFourTraded } from "@/features/search/api/get-market-movers";
import { getStockQuote } from "@/features/search/api/get-stock-quote";
import { getDailyTimeSeries } from "@/features/chart-data/get-time-series-daily";

import { StockModal } from "@/components/modal/stock-modal";

import { GainersLosersCard } from "./gainers-losers-card";

import { StockDataType, StockQuoteType, TimeSeriesDailyType } from "@/schemas/api-schemas";

export const TopFourTradedGrid = () => {
  const [traded, setTraded] = useState<StockDataType[]>([]);
  const [selectedStock, setSelectedStock] = useState<StockDataType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stockQuote, setStockQuote] = useState<StockQuoteType | null>(null);
  const [timeSeries, setTimeSeries] = useState<TimeSeriesDailyType | null>(null);


  useEffect(() => {
    getTopFourTraded().then(setTraded);
  }, []);

  useEffect(() => {
    if (selectedStock){
      getStockQuote(selectedStock.ticker).then(setStockQuote);
      getDailyTimeSeries(selectedStock.ticker).then(setTimeSeries);
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
        timeSeries={timeSeries}
      />
    </>
  );
};
