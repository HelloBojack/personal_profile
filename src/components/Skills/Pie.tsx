import { PieChart } from "react-minimal-pie-chart";

export const Pie = ({
  value,
  className = "w-[160px]",
}: {
  value: number;
  className?: string;
}) => {
  return (
    <PieChart
      className={className}
      data={[{ value, color: "url(#gradient1)" }]}
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
  );
};
