import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
} from "@/components/ui/card";

import { 
  StockDataType, 
  StockQuoteType, 
  StockType 
} from "@/schemas/api-schemas";

import { StockDetails } from "./stock-details";
import { AllStockDetails } from "./all-stock-details";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  stock?: StockDataType | null;
  allStock?: StockType | null;
  stockQuote: StockQuoteType | null;
};

export const StockModal = ({
  isOpen,
  onClose,
  stock,
  stockQuote,
  allStock,
}: Props) => {
  if (!isOpen) return null;
  // TODO: fix layout of modal, make it bigger, get more data from API

   return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="w-[90%] max-w-4xl"  onClick={(e) => e.stopPropagation()}>
        <Card className="bg-gradient-to-b from-emerald-500 to-slate-600 p-4 border-none">
          <CardHeader className="flex justify-center items-center">
            <CardTitle className="text-2xl flex items-center">
              {(stock?.ticker || allStock?.symbol) ?? "Stock"} - {stockQuote?.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 max-h-[70vh] overflow-y-auto">
            {stock ? (
              <StockDetails stock={stock} stockQuote={stockQuote} />
            ) : allStock ? (
              <AllStockDetails stockQuote={stockQuote}/>
            ) : (
              <p>No data available.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
