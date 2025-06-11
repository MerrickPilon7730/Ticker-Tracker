
import {
    Tooltip,
    XAxis,
    YAxis,
    LineChart,
    ResponsiveContainer,
    Line,
} from "recharts";

import type { TimeSeriesDailyType } from "@/schemas/api-schemas";

const transformData = (data: TimeSeriesDailyType) => {
  const entries = Object.entries(data).slice(0, 30).reverse(); 

  const result: { label: string; price: number }[] = [];

  for (const [date, values] of entries) {
    result.push(
      { label: `${date} (open)`, price: parseFloat(values["1. open"]) },
      { label: `${date} (close)`, price: parseFloat(values["4. close"]) }
    );
  }

  return result;
};


type Props = {
  data: TimeSeriesDailyType;
};

export const LineChartVariant = ({data}: Props) => {
    const chartData = transformData(data);

    return(
        <ResponsiveContainer>
            <LineChart 
              data={chartData} 
              >
                <XAxis 
                  tickLine={false}
                  dataKey="date"
                  style={{ fontSize: "12px" }}
                  tickMargin={16}
                  interval={4}
                  stroke="white"
                  label={{
                    value: "Year to date",
                    fill: "white"
                  }}
                />
                <YAxis 
                  stroke="white"
                  label={{
                    value: "Price",
                    fill: "white",
                    angle: -90,
                    dx: -20,
                  }}
                />
                <Tooltip />
                <Line 
                    dot={false}
                    dataKey="price"
                    stroke="black"
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    )
};