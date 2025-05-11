
import { ReactNode } from "react";

import { 
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type Props = {
    title: string,
    stockCard?: ReactNode,
}

export const ComponentCard = ({title, stockCard}: Props) => {
    return(
        <Card className="bg-gradient-to-b from-emerald-500 to-slate-600 border-none">
            <CardHeader>
                <CardTitle>
                    <h1 className="text-2xl">{title}</h1>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {stockCard}
                <p>More</p>
            </CardContent>
        </Card>
    );
};