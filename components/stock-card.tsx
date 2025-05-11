

import { 
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type Props = {
    title: string,
}

export const StockCard = ({title}: Props) => {
    return(
        <Card className="bg-emerald-600 hover:bg-emerald-300 border-none">
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                Content is going to be very very very vyer long but well see
            </CardContent>
        </Card>
    );
};