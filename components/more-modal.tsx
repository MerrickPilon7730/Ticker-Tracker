

import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string,
  content: React.ReactNode,
};

export const MoreModal = ({ isOpen, onClose, title, content }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center z-50 bg-black/60">
      <Card className="bg-gradient-to-b from-emerald-500 to-slate-600 w-[70%] max-w-screen border-none">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <button onClick={onClose} className="text-red-500 font-bold text-lg">&times;</button>
        </CardHeader>
        <CardContent className="space-y-2">
            {content}
        </CardContent>
      </Card>
    </div>
  );
};
