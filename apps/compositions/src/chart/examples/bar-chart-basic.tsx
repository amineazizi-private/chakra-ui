"use client"

import {
  ChartLegendContent,
  ChartRoot,
  ChartTooltipContent,
  useChartConfig,
} from "compositions/chart/chart"
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis } from "recharts"

export const BarChartBasic = () => {
  const chart = useChartConfig({
    data: [
      { sales: 63000, month: "June" },
      { sales: 72000, month: "July" },
      { sales: 85000, month: "August" },
      { sales: 79000, month: "September" },
      { sales: 90000, month: "October" },
      { sales: 95000, month: "November" },
      { sales: 88000, month: "December" },
    ],
    series: [{ name: "sales", color: "teal.solid" }],
  })

  return (
    <ChartRoot maxW="sm">
      <BarChart data={chart.data}>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip
          cursor={{ fill: chart.color("bg.muted") }}
          animationDuration={100}
          content={<ChartTooltipContent chart={chart} />}
        />
        <Legend content={<ChartLegendContent chart={chart} />} />
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
          />
        ))}
      </BarChart>
    </ChartRoot>
  )
}