import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "KEB Hana Bank", value: 10, color: "#6B5B95" },
  { name: "Mandiri", value: 15, color: "#2D9CDB" },
  { name: "BTN", value: 20, color: "#56CCF2" },
  { name: "Artha Graha", value: 25, color: "#A1E3D8" },
  { name: "BRI", value: 30, color: "#2F2E41" },
];

const renderLabel = (entry) => `${entry.value}%`;

export default function BankApprovalChart() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-black text-center font-bold text-sm md:text-md">
        Top 5 Bank Approval Tertinggi
      </h2>
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={true}
          label={renderLabel}
          outerRadius={120}
          innerRadius={60}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          formatter={(value, entry) => {
            const item = data.find((d) => d.name === value);
            return (
              <span className="text-xs" style={{ color: item.color }}>
                {value}
              </span>
            );
          }}
        />
      </PieChart>
    </div>
  );
}
