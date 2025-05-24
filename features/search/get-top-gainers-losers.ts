import {
  StockDataType,
  GainersLosersDataType,
  GainersLosersData,
} from "@/Schemas/api-schemas";

let cachedData: GainersLosersDataType | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 120;

export const getTopGainersLosers = async (): Promise<GainersLosersDataType> => {
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
  const data = GainersLosersData.parse(mockApiResponse); // Mock data to save api requests

  const topGainers = data.top_gainers.map((stock) => ({
    ...stock,
    ticker: stock.ticker.replace(/\+/g, ""),
  }));

  const toplosers = data.top_losers.map((stock) => ({
    ...stock,
    ticker: stock.ticker.replace(/\+/g, ""),
  }));

  const topTraded = data.most_actively_traded.map((stock) => ({
    ...stock,
    ticker: stock.ticker.replace(/\+/g, ""),
  }));

  data.top_gainers = topGainers;
  data.top_losers = toplosers;
  data.most_actively_traded = topTraded;

  cachedData = data;
  lastFetchTime = now;

  return data;
};

export const getTopFourGainers = async (): Promise<StockDataType[]> => {
  const topFourGainers = await getTopGainersLosers();
  return topFourGainers.top_gainers.slice(0, 4);
};

export const getTopFourLosers = async (): Promise<StockDataType[]> => {
  const topFourLosers = await getTopGainersLosers();
  return topFourLosers.top_losers.slice(0, 4);
};

export const getTopFourTraded = async (): Promise<StockDataType[]> => {
  const topFourTraded = await getTopGainersLosers();
  return topFourTraded.most_actively_traded.slice(0, 4);
};

export const getAllGainers = async (): Promise<StockDataType[]> => {
  const topGainers = await getTopGainersLosers();
  return topGainers.top_gainers;
};

export const getAllLosers = async (): Promise<StockDataType[]> => {
  const topLosers = await getTopGainersLosers();
  return topLosers.top_losers;
};

export const getMostActivelyTraded = async (): Promise<StockDataType[]> => {
  const mostTraded = await getTopGainersLosers();
  return mostTraded.most_actively_traded;
};

const mockApiResponse = {
  metadata: "Top gainers, losers, and most actively traded US tickers",
  last_updated: "2025-05-23 16:15:58 US/Eastern",
  top_gainers: [
    {
      ticker: "RVMDW",
      price: "0.29",
      change_amount: "0.1894",
      change_percentage: "188.2704%",
      volume: "126834",
    },
    {
      ticker: "IMNN",
      price: "1.16",
      change_amount: "0.7445",
      change_percentage: "179.1817%",
      volume: "377611447",
    },
    {
      ticker: "AIMDW",
      price: "0.208",
      change_amount: "0.1071",
      change_percentage: "106.1447%",
      volume: "16669",
    },
    {
      ticker: "PTIXW",
      price: "0.151",
      change_amount: "0.076",
      change_percentage: "101.3333%",
      volume: "221846",
    },
    {
      ticker: "VSTEW",
      price: "0.0203",
      change_amount: "0.01",
      change_percentage: "97.0874%",
      volume: "350475",
    },
    {
      ticker: "LIMNW",
      price: "0.1",
      change_amount: "0.0446",
      change_percentage: "80.5054%",
      volume: "43102",
    },
    {
      ticker: "SBET",
      price: "6.72",
      change_amount: "2.96",
      change_percentage: "78.7234%",
      volume: "5813217",
    },
    {
      ticker: "HONDW",
      price: "2.25",
      change_amount: "0.97",
      change_percentage: "75.7813%",
      volume: "1784113",
    },
    {
      ticker: "TE+",
      price: "0.1393",
      change_amount: "0.0578",
      change_percentage: "70.9202%",
      volume: "19154",
    },
    {
      ticker: "PMAX",
      price: "0.5099",
      change_amount: "0.1859",
      change_percentage: "57.3765%",
      volume: "364142906",
    },
    {
      ticker: "NTWOW",
      price: "0.244",
      change_amount: "0.0885",
      change_percentage: "56.9132%",
      volume: "16659",
    },
    {
      ticker: "BLMZ",
      price: "0.21",
      change_amount: "0.076",
      change_percentage: "56.7164%",
      volume: "388959265",
    },
    {
      ticker: "GORV",
      price: "0.2881",
      change_amount: "0.1018",
      change_percentage: "54.643%",
      volume: "250078646",
    },
    {
      ticker: "LIXTW",
      price: "0.0396",
      change_amount: "0.0138",
      change_percentage: "53.4884%",
      volume: "5435",
    },
    {
      ticker: "EONR+",
      price: "0.0548",
      change_amount: "0.0179",
      change_percentage: "48.5095%",
      volume: "59580",
    },
    {
      ticker: "LNZAW",
      price: "0.0231",
      change_amount: "0.0074",
      change_percentage: "47.1338%",
      volume: "13791",
    },
    {
      ticker: "VRMEW",
      price: "0.056",
      change_amount: "0.0175",
      change_percentage: "45.4545%",
      volume: "525",
    },
    {
      ticker: "AREBW",
      price: "0.029",
      change_amount: "0.009",
      change_percentage: "45.0%",
      volume: "28154",
    },
    {
      ticker: "RAPT",
      price: "1.23",
      change_amount: "0.3719",
      change_percentage: "43.3399%",
      volume: "4382136",
    },
    {
      ticker: "SBEV+",
      price: "0.0999",
      change_amount: "0.03",
      change_percentage: "42.9185%",
      volume: "194609",
    },
  ],
  top_losers: [
    {
      ticker: "GDHG",
      price: "1.87",
      change_amount: "-2.71",
      change_percentage: "-59.1703%",
      volume: "2520743",
    },
    {
      ticker: "NOEMW",
      price: "0.0413",
      change_amount: "-0.0554",
      change_percentage: "-57.2906%",
      volume: "1036",
    },
    {
      ticker: "ZOOZW",
      price: "0.05",
      change_amount: "-0.0474",
      change_percentage: "-48.6653%",
      volume: "1203",
    },
    {
      ticker: "NCPLW",
      price: "0.0226",
      change_amount: "-0.0193",
      change_percentage: "-46.0621%",
      volume: "1093",
    },
    {
      ticker: "ARKOW",
      price: "0.0153",
      change_amount: "-0.0127",
      change_percentage: "-45.3571%",
      volume: "154875",
    },
    {
      ticker: "BCAX",
      price: "9.27",
      change_amount: "-6.39",
      change_percentage: "-40.8046%",
      volume: "7191589",
    },
    {
      ticker: "CELUW",
      price: "0.0362",
      change_amount: "-0.0238",
      change_percentage: "-39.6667%",
      volume: "1150",
    },
    {
      ticker: "WTO",
      price: "1.15",
      change_amount: "-0.72",
      change_percentage: "-38.5027%",
      volume: "1285493",
    },
    {
      ticker: "HYMCL",
      price: "0.0111",
      change_amount: "-0.0069",
      change_percentage: "-38.3333%",
      volume: "85062",
    },
    {
      ticker: "COOTW",
      price: "0.0158",
      change_amount: "-0.0095",
      change_percentage: "-37.5494%",
      volume: "6104",
    },
    {
      ticker: "SMXWW",
      price: "0.0188",
      change_amount: "-0.0112",
      change_percentage: "-37.3333%",
      volume: "4516",
    },
    {
      ticker: "OAKUW",
      price: "0.0316",
      change_amount: "-0.0181",
      change_percentage: "-36.4185%",
      volume: "250",
    },
    {
      ticker: "VSSYW",
      price: "0.049",
      change_amount: "-0.026",
      change_percentage: "-34.6667%",
      volume: "1258",
    },
    {
      ticker: "MAPSW",
      price: "0.01",
      change_amount: "-0.0051",
      change_percentage: "-33.7748%",
      volume: "559948",
    },
    {
      ticker: "RFL+",
      price: "0.08",
      change_amount: "-0.037",
      change_percentage: "-31.6239%",
      volume: "2074",
    },
    {
      ticker: "PXSAW",
      price: "0.026",
      change_amount: "-0.0117",
      change_percentage: "-31.0345%",
      volume: "26820",
    },
    {
      ticker: "XAGE",
      price: "2.38",
      change_amount: "-1.07",
      change_percentage: "-31.0145%",
      volume: "475913",
    },
    {
      ticker: "PBMWW",
      price: "0.0176",
      change_amount: "-0.0078",
      change_percentage: "-30.7087%",
      volume: "40062",
    },
    {
      ticker: "MSAIW",
      price: "0.042",
      change_amount: "-0.0177",
      change_percentage: "-29.6482%",
      volume: "116099",
    },
    {
      ticker: "BULLZ",
      price: "2.42",
      change_amount: "-0.95",
      change_percentage: "-28.1899%",
      volume: "929068",
    },
  ],
  most_actively_traded: [
    {
      ticker: "PLRZ",
      price: "0.0034",
      change_amount: "-0.0008",
      change_percentage: "-19.0476%",
      volume: "403723058",
    },
    {
      ticker: "BLMZ",
      price: "0.21",
      change_amount: "0.076",
      change_percentage: "56.7164%",
      volume: "388959265",
    },
    {
      ticker: "IMNN",
      price: "1.16",
      change_amount: "0.7445",
      change_percentage: "179.1817%",
      volume: "377611447",
    },
    {
      ticker: "PMAX",
      price: "0.5099",
      change_amount: "0.1859",
      change_percentage: "57.3765%",
      volume: "364142906",
    },
    {
      ticker: "HCTI",
      price: "0.0058",
      change_amount: "-0.0008",
      change_percentage: "-12.1212%",
      volume: "289545793",
    },
    {
      ticker: "GORV",
      price: "0.2881",
      change_amount: "0.1018",
      change_percentage: "54.643%",
      volume: "250078646",
    },
    {
      ticker: "NVDA",
      price: "131.29",
      change_amount: "-1.54",
      change_percentage: "-1.1594%",
      volume: "196606061",
    },
    {
      ticker: "SOXL",
      price: "15.72",
      change_amount: "-0.79",
      change_percentage: "-4.785%",
      volume: "176544360",
    },
    {
      ticker: "EJH",
      price: "0.101",
      change_amount: "0.0139",
      change_percentage: "15.9587%",
      volume: "169616299",
    },
    {
      ticker: "TSLL",
      price: "14.48",
      change_amount: "-0.14",
      change_percentage: "-0.9576%",
      volume: "164556964",
    },
    {
      ticker: "SQQQ",
      price: "25.1687",
      change_amount: "0.7287",
      change_percentage: "2.9816%",
      volume: "164001867",
    },
    {
      ticker: "DNN",
      price: "1.675",
      change_amount: "0.175",
      change_percentage: "11.6667%",
      volume: "156543777",
    },
    {
      ticker: "QBTS",
      price: "18.81",
      change_amount: "-0.23",
      change_percentage: "-1.208%",
      volume: "147384097",
    },
    {
      ticker: "DEVS",
      price: "0.5108",
      change_amount: "0.1062",
      change_percentage: "26.2481%",
      volume: "134219932",
    },
    {
      ticker: "SOXS",
      price: "13.52",
      change_amount: "0.63",
      change_percentage: "4.8875%",
      volume: "130682490",
    },
    {
      ticker: "MLGO",
      price: "1.85",
      change_amount: "-0.32",
      change_percentage: "-14.7465%",
      volume: "116124529",
    },
    {
      ticker: "RGTI",
      price: "14.02",
      change_amount: "0.16",
      change_percentage: "1.1544%",
      volume: "107448357",
    },
    {
      ticker: "TQQQ",
      price: "66.32",
      change_amount: "-1.97",
      change_percentage: "-2.8848%",
      volume: "106242287",
    },
    {
      ticker: "PLUG",
      price: "0.78",
      change_amount: "-0.0199",
      change_percentage: "-2.4878%",
      volume: "102095735",
    },
    {
      ticker: "SPXS",
      price: "5.75",
      change_amount: "0.13",
      change_percentage: "2.3132%",
      volume: "99695647",
    },
  ],
};
