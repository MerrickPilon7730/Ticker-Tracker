
import {z} from "zod";

import { StockData } from "@/Schemas/stock-schema";

const GainersLosersData = z.object({
    metadata: z.string(),
    last_updated: z.string(),
    top_gainers: z.array(StockData),
    top_losers: z.array(StockData),
    most_actively_traded: z.array(StockData),
});

let cachedData: z.infer<typeof GainersLosersData> | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 120; 

export const getTopGainersLosers = async (): Promise<z.infer<typeof GainersLosersData>> => {
    const now = Date.now();

    if (cachedData && now - lastFetchTime < CACHE_DURATION) {
        return cachedData;
    }

    /*const response = await fetch("http://localhost:3000/api/alpha-vantage/gainers-losers");

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const json = await response.json();
    const data = GainersLosersData.parse(json);
    */
   const data = GainersLosersData.parse(mockApiResponse);// Mock data to save api requests

    cachedData = data;
    lastFetchTime = now;
    
    return data;
}

export const getTopFourGainers = async (): Promise<z.infer<typeof StockData>[]> => {
    const topFourGainers = await getTopGainersLosers();
    return topFourGainers.top_gainers.slice(0,4);
}

export const getTopFourLosers = async (): Promise<z.infer<typeof StockData>[]> => {
    const topFourLosers = await getTopGainersLosers();
    return topFourLosers.top_losers.slice(0,4);
}

export const getTopFourTraded = async (): Promise<z.infer<typeof StockData>[]> => {
    const topFourTraded = await getTopGainersLosers();
    return topFourTraded.most_actively_traded.slice(0,4);
}

export const getAllGainers = async (): Promise<z.infer<typeof StockData>[]> => {
    const topGainers = await getTopGainersLosers();
    return topGainers.top_gainers;
}

export const getAllLosers = async ():Promise<z.infer<typeof StockData>[]> => {
    const topLosers = await getTopGainersLosers();
    return topLosers.top_losers;
}

export const getMostActivelyTraded = async (): Promise<z.infer<typeof StockData>[]> => {
    const mostTraded = await getTopGainersLosers();
    return mostTraded.most_actively_traded;
}

const mockApiResponse = {
    "metadata": "Top gainers, losers, and most actively traded US tickers",
    "last_updated": "2025-05-15 16:15:59 US/Eastern",
    "top_gainers": [
        {
            "ticker": "KDLYW",
            "price": "7.52",
            "change_amount": "5.57",
            "change_percentage": "285.641%",
            "volume": "242076"
        },
        {
            "ticker": "CLIK",
            "price": "0.7098",
            "change_amount": "0.4298",
            "change_percentage": "153.5%",
            "volume": "479787005"
        },
        {
            "ticker": "ARKOW",
            "price": "0.0254",
            "change_amount": "0.0152",
            "change_percentage": "149.0196%",
            "volume": "1613081"
        },
        {
            "ticker": "BSLKW",
            "price": "0.05",
            "change_amount": "0.027",
            "change_percentage": "117.3913%",
            "volume": "8337"
        },
        {
            "ticker": "AYTU",
            "price": "2.59",
            "change_amount": "1.24",
            "change_percentage": "91.8519%",
            "volume": "62401580"
        },
        {
            "ticker": "FL",
            "price": "23.92",
            "change_amount": "11.05",
            "change_percentage": "85.8586%",
            "volume": "82996216"
        },
        {
            "ticker": "KDLY",
            "price": "13.86",
            "change_amount": "6.21",
            "change_percentage": "81.1765%",
            "volume": "29542819"
        },
        {
            "ticker": "BW-A",
            "price": "6.3",
            "change_amount": "2.54",
            "change_percentage": "67.5532%",
            "volume": "340151"
        },
        {
            "ticker": "CDIOW",
            "price": "0.0173",
            "change_amount": "0.0067",
            "change_percentage": "63.2075%",
            "volume": "27385"
        },
        {
            "ticker": "ABP",
            "price": "0.2651",
            "change_amount": "0.1001",
            "change_percentage": "60.6667%",
            "volume": "359218318"
        },
        {
            "ticker": "RFL+",
            "price": "0.09",
            "change_amount": "0.0338",
            "change_percentage": "60.1423%",
            "volume": "7913"
        },
        {
            "ticker": "BTMWW",
            "price": "0.0871",
            "change_amount": "0.0311",
            "change_percentage": "55.5357%",
            "volume": "499370"
        },
        {
            "ticker": "NCNA",
            "price": "0.0534",
            "change_amount": "0.0188",
            "change_percentage": "54.3353%",
            "volume": "825248968"
        },
        {
            "ticker": "CINGW",
            "price": "0.0389",
            "change_amount": "0.0136",
            "change_percentage": "53.7549%",
            "volume": "1700"
        },
        {
            "ticker": "GTI",
            "price": "0.147",
            "change_amount": "0.05",
            "change_percentage": "51.5464%",
            "volume": "270950434"
        },
        {
            "ticker": "AP+",
            "price": "0.0151",
            "change_amount": "0.0051",
            "change_percentage": "51.0%",
            "volume": "4492"
        },
        {
            "ticker": "ASST",
            "price": "6.87",
            "change_amount": "2.17",
            "change_percentage": "46.1702%",
            "volume": "23582025"
        },
        {
            "ticker": "KWESW",
            "price": "0.058",
            "change_amount": "0.018",
            "change_percentage": "45.0%",
            "volume": "6376"
        },
        {
            "ticker": "GRYP",
            "price": "1.07",
            "change_amount": "0.3189",
            "change_percentage": "42.4577%",
            "volume": "149138040"
        },
        {
            "ticker": "VEEAW",
            "price": "0.14",
            "change_amount": "0.041",
            "change_percentage": "41.4141%",
            "volume": "64400"
        }
    ],
    "top_losers": [
        {
            "ticker": "HCTI",
            "price": "0.0376",
            "change_amount": "-0.1874",
            "change_percentage": "-83.2889%",
            "volume": "131396173"
        },
        {
            "ticker": "WYHG",
            "price": "1.72",
            "change_amount": "-7.58",
            "change_percentage": "-81.5054%",
            "volume": "2707390"
        },
        {
            "ticker": "REE",
            "price": "0.9306",
            "change_amount": "-2.3594",
            "change_percentage": "-71.7143%",
            "volume": "7015128"
        },
        {
            "ticker": "NFE",
            "price": "2.51",
            "change_amount": "-4.27",
            "change_percentage": "-62.9794%",
            "volume": "91535351"
        },
        {
            "ticker": "NAOV",
            "price": "1.43",
            "change_amount": "-2.39",
            "change_percentage": "-62.5654%",
            "volume": "3319019"
        },
        {
            "ticker": "LGPS",
            "price": "2.3",
            "change_amount": "-3.79",
            "change_percentage": "-62.2332%",
            "volume": "1938242"
        },
        {
            "ticker": "NCPLW",
            "price": "0.0152",
            "change_amount": "-0.0248",
            "change_percentage": "-62.0%",
            "volume": "330"
        },
        {
            "ticker": "IXHL",
            "price": "0.2685",
            "change_amount": "-0.4315",
            "change_percentage": "-61.6429%",
            "volume": "378579426"
        },
        {
            "ticker": "NLSPW",
            "price": "0.0042",
            "change_amount": "-0.0042",
            "change_percentage": "-50.0%",
            "volume": "21311"
        },
        {
            "ticker": "LSBPW",
            "price": "0.03",
            "change_amount": "-0.0241",
            "change_percentage": "-44.5471%",
            "volume": "2330"
        },
        {
            "ticker": "KWMWW",
            "price": "0.0512",
            "change_amount": "-0.0388",
            "change_percentage": "-43.1111%",
            "volume": "116118"
        },
        {
            "ticker": "CREVW",
            "price": "0.0169",
            "change_amount": "-0.0115",
            "change_percentage": "-40.493%",
            "volume": "118015"
        },
        {
            "ticker": "GCTS",
            "price": "1.31",
            "change_amount": "-0.89",
            "change_percentage": "-40.4545%",
            "volume": "2657675"
        },
        {
            "ticker": "LDTCW",
            "price": "0.0303",
            "change_amount": "-0.0204",
            "change_percentage": "-40.2367%",
            "volume": "56046"
        },
        {
            "ticker": "UOKA",
            "price": "0.0818",
            "change_amount": "-0.0514",
            "change_percentage": "-38.5886%",
            "volume": "2697755"
        },
        {
            "ticker": "SILO",
            "price": "0.5199",
            "change_amount": "-0.3161",
            "change_percentage": "-37.811%",
            "volume": "2285691"
        },
        {
            "ticker": "BZAIW",
            "price": "0.2101",
            "change_amount": "-0.1259",
            "change_percentage": "-37.4702%",
            "volume": "81615"
        },
        {
            "ticker": "CELG^",
            "price": "0.0251",
            "change_amount": "-0.0148",
            "change_percentage": "-37.0927%",
            "volume": "42256"
        },
        {
            "ticker": "AGMH",
            "price": "0.06",
            "change_amount": "-0.0343",
            "change_percentage": "-36.3733%",
            "volume": "27288308"
        },
        {
            "ticker": "AFMD",
            "price": "0.0851",
            "change_amount": "-0.0449",
            "change_percentage": "-34.5385%",
            "volume": "5602213"
        }
    ],
    "most_actively_traded": [
        {
            "ticker": "NCNA",
            "price": "0.0534",
            "change_amount": "0.0188",
            "change_percentage": "54.3353%",
            "volume": "825248968"
        },
        {
            "ticker": "CLIK",
            "price": "0.7098",
            "change_amount": "0.4298",
            "change_percentage": "153.5%",
            "volume": "479787005"
        },
        {
            "ticker": "PLRZ",
            "price": "0.0089",
            "change_amount": "-0.0037",
            "change_percentage": "-29.3651%",
            "volume": "400383211"
        },
        {
            "ticker": "IXHL",
            "price": "0.2685",
            "change_amount": "-0.4315",
            "change_percentage": "-61.6429%",
            "volume": "378579426"
        },
        {
            "ticker": "ABP",
            "price": "0.2651",
            "change_amount": "0.1001",
            "change_percentage": "60.6667%",
            "volume": "359218318"
        },
        {
            "ticker": "GNLN",
            "price": "0.0064",
            "change_amount": "0.0002",
            "change_percentage": "3.2258%",
            "volume": "295118262"
        },
        {
            "ticker": "GTI",
            "price": "0.147",
            "change_amount": "0.05",
            "change_percentage": "51.5464%",
            "volume": "270950434"
        },
        {
            "ticker": "PLUG",
            "price": "0.6994",
            "change_amount": "-0.0859",
            "change_percentage": "-10.9385%",
            "volume": "264634876"
        },
        {
            "ticker": "NVDA",
            "price": "134.83",
            "change_amount": "-0.51",
            "change_percentage": "-0.3768%",
            "volume": "223900871"
        },
        {
            "ticker": "TAOP",
            "price": "0.2831",
            "change_amount": "0.0791",
            "change_percentage": "38.7745%",
            "volume": "223156909"
        },
        {
            "ticker": "TSLL",
            "price": "14.82",
            "change_amount": "-0.43",
            "change_percentage": "-2.8197%",
            "volume": "199589265"
        },
        {
            "ticker": "GRYP",
            "price": "1.07",
            "change_amount": "0.3189",
            "change_percentage": "42.4577%",
            "volume": "149138040"
        },
        {
            "ticker": "SOXL",
            "price": "18.47",
            "change_amount": "-0.37",
            "change_percentage": "-1.9639%",
            "volume": "138738876"
        },
        {
            "ticker": "HCTI",
            "price": "0.0376",
            "change_amount": "-0.1874",
            "change_percentage": "-83.2889%",
            "volume": "131396173"
        },
        {
            "ticker": "UNH",
            "price": "274.17",
            "change_amount": "-33.84",
            "change_percentage": "-10.9867%",
            "volume": "120468128"
        },
        {
            "ticker": "QBTS",
            "price": "11.04",
            "change_amount": "-0.04",
            "change_percentage": "-0.361%",
            "volume": "112179393"
        },
        {
            "ticker": "SQQQ",
            "price": "23.65",
            "change_amount": "-0.09",
            "change_percentage": "-0.3791%",
            "volume": "112048042"
        },
        {
            "ticker": "SOXS",
            "price": "11.56",
            "change_amount": "0.22",
            "change_percentage": "1.94%",
            "volume": "109852915"
        },
        {
            "ticker": "EKSO",
            "price": "0.4",
            "change_amount": "-0.052",
            "change_percentage": "-11.5044%",
            "volume": "97640468"
        },
        {
            "ticker": "PTPI",
            "price": "0.16",
            "change_amount": "0.02",
            "change_percentage": "14.2857%",
            "volume": "97449519"
        }
    ]
}