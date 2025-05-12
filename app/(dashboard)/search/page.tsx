import { ComponentCard } from "@/components/component-card";
import { GainersLosersCard } from "@/app/(dashboard)/search/components/gainers-losers-card"; 

import { getTopFourGainers, getTopFourLosers } from "@/features/search/get-top-gainers-losers";


export default async function SearchPage(){
    const topFourGainers = await getTopFourGainers();
    const topFourLosers = await getTopFourLosers();

    return(
        <div className="flex flex-cols items-center justify-center">
            <div className="grid grid-cols-2 items-center justify-center gap-x-15 w-[80%] mt-4">
                <div className="grid">
                    <ComponentCard 
                        key={"Top Gainers"} 
                        title="Top Gainers" 
                        stockCard={
                            <div className="grid grid-cols-2 gap-4">
                            {topFourGainers.map((gainers) => (
                                <GainersLosersCard 
                                    key={gainers.ticker} 
                                    title={gainers.ticker} 
                                    change_percentage={gainers.change_percentage}
                                    price={"$"+gainers.price}
                                    change_amount={"$"+gainers.change_amount}
                                />
                            ))} 
                            </div>
                        }
                    />
                </div>
                <div className="grid">
                    <ComponentCard 
                        key={"Top Losers"} 
                        title="Top Losers" 
                        bg="bg-gradient-to-b from-red-500 to-slate-600"
                        more="text-red-500"
                        stockCard={
                            <div className="grid grid-cols-2 gap-4">
                            {topFourLosers.map((losers) => (
                                <GainersLosersCard 
                                    key={losers.ticker} 
                                    title={losers.ticker} 
                                    change_percentage={losers.change_percentage}
                                    price={"$"+losers.price}
                                    change_amount={"$"+losers.change_amount}
                                    bg="bg-red-500 hover:bg-red-300"
                                />
                            ))}
                            </div>
                        }
                    />
                </div>
            </div>

        </div>
    )
}