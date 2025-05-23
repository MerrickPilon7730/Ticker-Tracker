
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";
import { StockDataType } from "@/Schemas/stock-schema";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  stock: StockDataType | null,
};

export const StockModal = ({ isOpen, onClose, stock }: Props) => {
  if (!isOpen || !stock) return null;
  // TODO: fix layout of modal, make it bigger, get more data from API
  return (
    <div className="fixed inset-0 flex items-start justify-center z-50 pt-[10%] bg-black/60">
      <Card className="bg-gradient-to-b from-emerald-500 to-slate-600 w-[70%] max-w-screen p-4 border-none">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>{stock.ticker} Details</CardTitle>
          <button onClick={onClose} className="text-red-500 font-bold text-lg">&times;</button>
        </CardHeader>
        <CardContent className="space-y-2">
          <p><strong>Price:</strong> ${Number(stock.price).toFixed(2)}</p>
          <p><strong>Change:</strong> ${Number(stock.change_amount).toFixed(2)}</p>
          <p><strong>Change %:</strong> {stock.change_percentage}</p>
        </CardContent>
      </Card>
    </div>
  );
};
