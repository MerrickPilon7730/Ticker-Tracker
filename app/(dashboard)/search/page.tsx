import { ComponentCard } from "@/components/component-card";
import { StockCard } from "@/components/stock-card";


export default function SearchPage(){
    return(
        <div className="flex flex-cols items-center justify-center">
            <div className="grid grid-cols-2 items-center justify-center gap-x-10">
                <div>
                    <ComponentCard title="Top Gainers" stockCard={<StockCard title="Stock" />}/>
                </div>
                <div>
                    <ComponentCard title="Top Losers"/>
                </div>
            </div>

        </div>
    )
}