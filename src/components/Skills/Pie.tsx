import { PieChart } from "react-minimal-pie-chart";

export const Pie = ({
  value,
  text,
  className = "w-[160px]",
}: {
  value: number;
  text: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <PieChart
        data={[{ value, color: "url(#gradient1)" }]}
        totalValue={100}
        label={({ dataEntry }) => `${dataEntry.value}%`}
        labelStyle={{
          fontSize: "18px",
          fontWeight: "600",
          fill: "#fff",
        }}
        labelPosition={0}
        startAngle={-45}
        lengthAngle={-(360 - 6 * (100 - value))}
        lineWidth={20}
        rounded
        animate
      >
        <defs>
          <linearGradient id="gradient1">
            <stop offset="0%" stopColor="#a13683" />
            <stop offset="60%" stopColor="#5a30b3" />
            <stop offset="100%" stopColor="#5a30b3" />
          </linearGradient>
        </defs>
      </PieChart>
      <h5 className="text-2xl mt-[15px]">{text}</h5>
    </div>
  );
};
