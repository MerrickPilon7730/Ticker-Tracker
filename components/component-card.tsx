
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
    onClickMore?: () => void;
}

export const ComponentCard = ({title, bg, content, more, onClickMore}: Props) => {
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
                <div className="flex justify-end">
                    <div className={`cursor-pointer flex justify-end gap-2 mr-6 ${bg ? "hover:text-red-500" : "hover:text-emerald-500"}`} onClick={onClickMore}>
                        <p>More</p>
                        <ArrowRightCircleIcon />
                    </div>
                </div>
            )}
        </Card> 
    );
};