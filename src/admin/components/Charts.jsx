
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";
import { motion } from "framer-motion";

const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Charts = ({ bookings }) => {
  // ---------- DATA ----------
  const revenueData = bookings.map((b, i) => ({
    name: `B${i + 1}`,
    value: b.paymentMethod === "Cash" ? 0 : 500,
  }));

  const statusCount = [
    {
      name: "Confirmed",
      value: bookings.filter((b) => b.paymentStatus === "Confirmed").length,
    },
    {
      name: "Pending",
      value: bookings.filter((b) => b.paymentStatus === "Pending Verification").length,
    },
    {
      name: "Rejected",
      value: bookings.filter((b) => b.paymentStatus === "Rejected").length,
    },
  ];

  const dailyData = bookings.reduce((acc, b) => {
    const date = b.createdAt?.split("T")[0];
    if (!date) return acc;

    const found = acc.find((d) => d.date === date);
    if (found) found.count += 1;
    else acc.push({ date, count: 1 });

    return acc;
  }, []);

  const charts = [
    {
      title: "Revenue Trend",
      type: "line",
      data: revenueData,
    },
    {
      title: "Booking Status",
      type: "pie",
      data: statusCount,
    },
    {
      title: "Daily Bookings",
      type: "bar",
      data: dailyData,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

      {charts.map((chart, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.02 }}
          className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg"
        >
          {/* HEADER */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">
              {chart.title}
            </h2>

            <span className="text-xs text-slate-400">
              Live
            </span>
          </div>

          {/* CHARTS */}
          <div className="w-full h-[260px]">
            {chart.type === "line" && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chart.data}>
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0B1120",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "10px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}

            {chart.type === "pie" && (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chart.data}
                    dataKey="value"
                    outerRadius={90}
                    innerRadius={50}
                    paddingAngle={5}
                    label
                  >
                    {chart.data.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}

            {chart.type === "bar" && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chart.data}>
                  <XAxis dataKey="date" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0B1120",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "10px",
                    }}
                  />
                  <Bar
                    dataKey="count"
                    fill="#10b981"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </motion.div>
      ))}

    </div>
  );
};

export default Charts;