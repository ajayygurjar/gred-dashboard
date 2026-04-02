import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { completionStats } from "../data/dummyData"

const COLORS = ['#6366f1', '#e2e8f0']

const CompletionChart = () => {
    return (
        <div className="bg-white rounded-xl p-5 border border-slate-200">
            <h3 className="text-base font-semibold text-slate-800">Completion Status</h3>  {/* ✅ fix: was slate-200 */}
            <p className="text-xs text-slate-400 mb-5">Completed vs ongoing enrollments</p>

            <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                    <Pie data={completionStats} cx="50%" cy="50%" innerRadius={65} outerRadius={95} paddingAngle={4} dataKey="value">
                        {completionStats.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '12px' }} />
                    <Legend iconType="circle" iconSize={8} formatter={(value) => (
                        <span style={{ fontSize: '12px', color: '#64748b' }}>{value}</span>
                    )} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CompletionChart