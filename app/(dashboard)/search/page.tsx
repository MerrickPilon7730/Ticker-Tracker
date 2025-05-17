"use client"

import { useEffect, useState } from "react";
import { ComponentCard } from "@/components/component-card";
import { StockTable } from "./components/stock-table";
import { columns } from "./components/stock-columns";
import { getAllStocks, StockAPIResponse } from "@/features/search/get-all-stocks";
import { Stock } from "./components/stock-columns";
import { TopGainersGrid } from "./components/gainers-grid";
import { TopLosersGrid } from "./components/losers-grid";
import { TopTradedGrid } from "./components/most-traded-grid";

export default function SearchPage() {
  const [stocks, setStocks] = useState<Stock[]>([]);
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
      <div className="grid grid-cols-3 mb-4">
        <div className="flex justify-center">
          <div className="w-full max-w-[90%]">
                <ComponentCard 
                  title="Top Gainers"
                  content={<TopGainersGrid />}
                />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-[90%]">
            <ComponentCard 
              title="Top Losers" 
              bg="bg-gradient-to-b from-red-500 to-slate-600"
              content={<TopLosersGrid />}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-[90%]">
            <ComponentCard 
              title="Most Traded"
              content={<TopTradedGrid/>}
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
                filterKey="name" 
                data={stocks} 
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
