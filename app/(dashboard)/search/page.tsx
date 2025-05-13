"use client";

import { useEffect, useState } from "react";
import { ComponentCard } from "@/components/component-card";
import { StockTable } from "./components/stock-table";
import { columns } from "./components/stock-columns";
import { getAllStocks, StockAPIResponse } from "@/features/search/get-all-stocks";
import { Stock } from "./components/stock-columns";

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

  return (
    <div className="flex justify-center">
      <div className="w-[80%]">
        <ComponentCard
          title="Search"
          content={
            <StockTable columns={columns} filterKey="name" data={stocks} />
          }
        />
      </div>
    </div>
  );
}
