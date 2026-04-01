import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { monthlyEnrollments } from "../data/dummyData";

const EnrollmentChart = () => {
    return (
        <div className="bg-white rounded-xl p-5 border border-slate-200">
            <h3 className="text-base font-semibold text-slate-800 mb-1">
                Monthly Enrollments
            </h3>
            <p className="text-xs text-slate-400 mb-5">
                New enrollments per month in 2024
            </p>

            <ResponsiveContainer width='100%' height={240}>
                <BarChart data={monthlyEnrollments} barSize={32}>
                    <CartesianGrid strokeDasharray='3 3' stroke="#f1f5f9" />
                    <XAxis
                        dataKey='month'
                        tick={{ fontSize: 12, fill: '#94a3b8' }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fontSize: 12, fill: '#94a3b8' }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#fff',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            fontSize: '12px',
                        }}
                    />
                    <Bar dataKey="enrollments" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
}

export default EnrollmentChart;