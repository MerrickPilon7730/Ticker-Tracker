
import { ReactNode } from "react";

import { 
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CircleArrowRight } from "lucide-react";

type Props = {
    title: string,
    stockCard?: ReactNode,
    bg?: string,
    more?: string
}

export const ComponentCard = ({title, stockCard, bg, more}: Props) => {
    return(
        <Card className={`${bg ? bg : "bg-gradient-to-b from-emerald-500 to-slate-600"} border-none`}>
            <CardHeader>
                <CardTitle>
                    <h1 className="text-2xl">{title}</h1>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {stockCard}
                <div className="flex justify-end gap-x-2 mt-2">
                    More 
                    <CircleArrowRight 
                        className={`${more ? more :"text-emerald-500"}`} 
                    />
                </div>
                
            </CardContent>
        </Card>
    );
};