"use client"

import { useEffect, useState } from "react";

import { getAllStocks, StockAPIResponse } from "@/features/search/api/get-all-stocks";

import { ComponentCard } from "@/components/component-card";
import { StockTable } from "./components/stock-table";
import { columns } from "./components/stock-columns";
import { TopFourGainersGrid } from "./components/gainers-losers/top-four-gainers-grid";
import { TopFourLosersGrid } from "./components/gainers-losers/top-four-losers-grid";
import { TopFourTradedGrid } from "./components/gainers-losers/top-four-most-traded-grid";
import { TopGainersGrid } from "./components/gainers-losers/all-gainers-grid";
import { TopLosersGrid } from "./components/gainers-losers/all-losers-grid";
import { TopTradedGrid } from "./components/gainers-losers/all-most-traded.grid";

import { StockType } from "@/Schemas/api-schemas";

export default function SearchPage() {
  const [stocks, setStocks] = useState<StockType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllStocks().then((response: StockAPIResponse) => {
        const fetchedStocks = response.data || [];
        setStocks(fetchedStocks);
        setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  // TODO: change this to a skeleton

  return (
    <div>
      <div className="grid grid-cols-3 mb-8">
        <div className="flex justify-center">
          <div className="w-full max-w-[90%]">
                <ComponentCard 
                  title="Top Gainers"
                  content={<TopFourGainersGrid />}
                  moreContent={<TopGainersGrid />}
                />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-[90%]">
            <ComponentCard 
              title="Top Losers" 
              bg="bg-gradient-to-b from-red-500 to-slate-600"
              content={<TopFourLosersGrid />}
              moreContent={<TopLosersGrid />}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-[90%]">
            <ComponentCard 
              title="Most Traded"
              content={<TopFourTradedGrid/>}
              moreContent={<TopTradedGrid />}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <ComponentCard
            title="Search"
            content={
              <StockTable
                columns={columns} 
                data={stocks} 
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
