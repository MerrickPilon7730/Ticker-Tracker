"use client";

import { useState, useEffect } from "react";

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { getStockQuote } from "@/features/search/api/get-stock-quote";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StockModal } from "@/components/modal/stock-modal";

import { StockType, StockQuoteType} from "@/schemas/api-schemas";

interface StockTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function globalFilterFn(row: { original: any }, columnId: string, filterValue: string) {
  const value = filterValue.toLowerCase();
  const symbol = row.original.symbol?.toLowerCase() ?? "";
  const name = row.original.name?.toLowerCase() ?? "";
  return symbol.includes(value) || name.includes(value);
}

export function StockTable<TData extends StockType, TValue>({
  columns,
  data,
}: StockTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedStock, setSelectedStock] = useState<TData | null>(null);
  const [stockQuote, setStockQuote] = useState<StockQuoteType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (stock: TData) => {
    setSelectedStock(stock);
    setIsModalOpen(true);
  };

    useEffect(() => {
      if (selectedStock){
        getStockQuote(selectedStock.symbol).then(setStockQuote);
      }
    }, [selectedStock]);

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedStock(null);
    setStockQuote(null);
  }

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn,
    filterFromLeafRows: true,
    initialState: {
        pagination: {
            pageSize: 25,
            pageIndex: 0, 
      },
    },
  });

  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%]">
        <div className="flex items-center py-4">
          <Input
            placeholder={`Search by ticker or company name...`}
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="max-w-sm"
          />
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader className="text-bold text-lg">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow 
                  key={row.id} 
                  className="hover:bg-emerald-400 cursor-pointer"
                  onClick={() => handleRowClick(row.original)}
                  >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="cursor-pointer hover:bg-emerald-400"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="cursor-pointer hover:bg-emerald-400"
          >
            Next
          </Button>
        </div>
      </div>
      <StockModal
        isOpen={isModalOpen}
        onClose={handleClose}
        allStock={selectedStock as StockType}
        stockQuote={stockQuote}
      />
    </div>
  );
}
