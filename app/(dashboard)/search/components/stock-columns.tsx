

import { ColumnDef } from "@tanstack/react-table";

import { StockType } from "@/Schemas/api-schemas";

export const columns: ColumnDef<StockType>[] = [
    {
        accessorKey: "symbol",
        header: "Ticker",
        enableGlobalFilter: true,
    },
    {
        accessorKey: "name",
        header: "Company Name",
        enableGlobalFilter: true,
    },
    { 
        accessorKey: "currency",
        header: "Currency",
    },
    {
        accessorKey: "exchange",
        header: "Exchange",
    },
]