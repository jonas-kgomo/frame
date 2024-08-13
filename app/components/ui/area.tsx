"use client";

import {
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "../../components/ui/chart";

// Chart data
const chartData = [
  { year: 1970, historicalEmissions: 0 },
  { year: 1980, historicalEmissions: 10 },
  { year: 1990, historicalEmissions: 20 },
  { year: 2000, historicalEmissions: 30 },
  { year: 2010, historicalEmissions: 35 },
  { year: 2020, historicalEmissions: 40, path2C: 40, currentPath: 40 },

  { year: 2030, path2C: 44, currentPath: 45 },
  { year: 2040, path2C: 45, currentPath: 50 },
  { year: 2050, path2C: 47, currentPath: 55 },
  { year: 2060, path2C: 50, currentPath: 60 },
  { year: 2070, path2C: 20, currentPath: 55 },
];

// Chart config
const chartConfig = {
  historicalEmissions: {
    label: "Historical Emissions",
    color: "hsl(var(--chart-3))",
  },
  path2C: {
    label: "2°C Path",
    color: "hsl(var(--chart-4))",
  },
  currentPath: {
    label: "Current Path",
    color: "hsl(var(--chart-2))",
  },
  white: {
    color: "#fff",
  },
};

export default function EmissionPathChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Global Emissions Path</CardTitle>
        <CardDescription>
          Visualization of historical and projected global CO2 emissions
          required to limit global temperature increases to 2°C.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ComposedChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis />
            <Tooltip
              content={<ChartTooltipContent labelKey="year" indicator="line" />}
              cursor={false}
              defaultIndex={1}
            />
            <Area
              type="monotone"
              dataKey="historicalEmissions"
              stroke="none"
              fill={chartConfig.historicalEmissions.color}
              dot={false}
              activeDot={false}
              connectNulls
            />
            <Area
              type="monotone"
              dataKey="path2C"
              stroke={chartConfig.path2C.color}
              fill={chartConfig.path2C.color}
              strokeDasharray="6 8"
              dot={false}
              connectNulls
            />
            <Area
              type="monotone"
              dataKey="currentPath"
              stroke={chartConfig.currentPath.color}
              fill={chartConfig.white.color}
              dot={false}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
