

import { 
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type Props = {
    title: string,
    price: string,
    change_amount: string,
    change_percentage: string,
}

export const GainersLosersCard = ({title, price, change_amount, change_percentage}: Props) => {
    return(
        <Card className="bg-emerald-600 hover:bg-emerald-300 border-none">
            <CardHeader>
                <CardTitle className="text-sm font-bold">
                    <div className="flex justify-between">
                        <div className="-mb-5">
                            {title}
                        </div>
                        <div className="items-end justify-end">
                            {change_percentage}
                        </div>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
                    <div className="flex justify-between">
                        <div>
                            {price}
                        </div>
                        <div className="items-end justify-end">
                            {change_amount}
                        </div>
                    </div>
            </CardContent>
        </Card>
    );
};