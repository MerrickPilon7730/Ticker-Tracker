
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
    <div 
  className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
  onClick={onClose}
>
  <div 
    className="w-[90%] max-w-4xl" 
    onClick={(e) => e.stopPropagation()}
  >
    <Card className="bg-gradient-to-b from-emerald-500 to-slate-600 p-4 border-none">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>{stock.ticker} Details</CardTitle>
        <button onClick={onClose} className="text-red-500 font-bold text-lg">&times;</button>
      </CardHeader>
      <CardContent className="space-y-2 max-h-[70vh] overflow-y-auto">
        <p><strong>Price:</strong> ${Number(stock.price).toFixed(2)}</p>
        <p><strong>Change:</strong> ${Number(stock.change_amount).toFixed(2)}</p>
        <p><strong>Change %:</strong> {stock.change_percentage}</p>
      </CardContent>
    </Card>
  </div>
</div>

  );
};
