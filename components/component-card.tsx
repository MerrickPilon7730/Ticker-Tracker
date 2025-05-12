

import { 
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type Props = {
    title: string,
    bg?: string,
}

export const ComponentCard = ({title, bg}: Props) => {
    return(
        <Card className={`${bg ? bg : "bg-gradient-to-b from-emerald-500 to-slate-600"} border-none`}>
            <CardHeader>
                <CardTitle>
                    <h1 className="text-2xl">{title}</h1>
                </CardTitle>
            </CardHeader>
            <CardContent className="items-center justify-center">
                Content
            </CardContent>
        </Card>
    );
};