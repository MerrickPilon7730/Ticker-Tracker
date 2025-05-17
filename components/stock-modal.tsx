
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="bg-white w-[90%] max-w-md p-4">
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
