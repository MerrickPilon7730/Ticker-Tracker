
import {
    Tooltip,
    XAxis,
    YAxis,
    LineChart,
    ResponsiveContainer,
    CartesianGrid,
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
            <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis 
                    axisLine={false}
                    tickLine={false}
                    dataKey="date"
                    style={{ fontSize: "12px" }}
                    tickMargin={16}
                    interval={4}
                />
                <YAxis />
                <Tooltip />
                <Line 
                    dot={false}
                    dataKey="price"
                    stroke="#3d82f6"
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    )
};