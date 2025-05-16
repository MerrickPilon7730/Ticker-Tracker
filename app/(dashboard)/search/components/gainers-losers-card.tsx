
import { ComponentCard } from "@/components/component-card";

type Props = {
    title: string,
}

export const GainersLosersCard = ({title}: Props) => {
    return (
        <div>
            <ComponentCard title={title}/>
        </div>
    )
};