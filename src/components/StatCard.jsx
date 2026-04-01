const StatCard = ({ title, value, subtitle, icon: Icon, color }) => {
    const colorMap = {
        indigo: 'bg-indigo-50 text-indigo-600',
        green: 'bg-green-50  text-green-600',
        blue: 'bg-blue-50   text-blue-600',
        orange: 'bg-orange-50 text-orange-600',
    }

    return (
        <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-start gap-4">

            {/* icon Box */}
            <div className={`p-3 rounded-lg ${colorMap[color]}`}>
                <Icon size={20} />
            </div>

            {/* text */}
            <div>
                <p className="text-sm text-slate-400 font-medium">{title}</p>
                <p className="text-2xl font-bold text-slate-800 mt-0.5">{value}</p>
                <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
            </div>

        </div>
    )
}

export default StatCard