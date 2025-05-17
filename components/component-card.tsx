
import { ArrowRightCircleIcon } from "lucide-react";

import { 
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type Props = {
    title: string,
    bg?: string,
    content?: React.ReactNode,
    more?: React.ReactNode,
}

export const ComponentCard = ({title, bg, content, more}: Props) => {
    return(
        <Card className={`${bg ? bg : "bg-gradient-to-b from-emerald-500 to-slate-600"} border-none`}>
            <CardHeader>
                <CardTitle>
                    <h1 className="text-2xl">{title}</h1>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                {content}
            </CardContent>
            {more ? (
                more
                ) : (
                <div className="flex justify-end gap-2 mr-6">
                    <p>More</p>
                    <ArrowRightCircleIcon className="cursor-pointer"/>
                </div>
            )}
        </Card> 
    );
};