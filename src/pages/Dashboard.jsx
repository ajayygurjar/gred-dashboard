import { Users, BookOpen, TrendingUp, Award } from 'lucide-react'
import StatCard from '../components/StatCard'
import { getStats } from '../data/dummyData'

const Dashboard = () => {
    const { totalUsers, totalCourses, totalEnrollments, avgCompletion } = getStats()

    const stats = [
        {
            title: 'Total Users',
            value: totalUsers,
            subtitle: 'Students & instructors',
            icon: Users,
            color: 'indigo',
        },
        {
            title: 'Total Courses',
            value: totalCourses,
            subtitle: 'Active & inactive',
            icon: BookOpen,
            color: 'blue',
        },
        {
            title: 'Total Enrollments',
            value: totalEnrollments,
            subtitle: 'Across all courses',
            icon: TrendingUp,
            color: 'green',
        },
        {
            title: 'Avg Completion',
            value: `${avgCompletion}%`,
            subtitle: 'Across all courses',
            icon: Award,
            color: 'orange',
        },
    ]

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-slate-800">Dashboard</h2>
                <p className="text-sm text-slate-400 mt-1">Welcome to GRED Admin Panel</p>
            </div>

            {/* Stat*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                ))}
            </div>

        </div>
    )
}

export default Dashboard