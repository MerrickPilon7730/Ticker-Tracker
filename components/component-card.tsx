

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
}

export const ComponentCard = ({title, bg, content}: Props) => {
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
        </Card>
    );
};