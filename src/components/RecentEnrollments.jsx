import { users, courses, enrollments } from '../data/dummyData'

const RecentEnrollments = () => {
    const recent = enrollments.slice(-6).reverse().map((e) => ({
        id: e.id,
        userName: users.find((u) => u.id === e.userId)?.name ?? 'Unknown',
        courseName: courses.find((c) => c.id === e.courseId)?.title ?? 'Unknown',
        enrolledOn: e.enrolledOn,
        status: e.status,
    }))

    return (
        <div className="bg-white rounded-xl border border-slate-200 mt-4">
            <div className="px-5 py-4 border-b border-slate-100">
                <h3 className="text-base font-semibold text-slate-800">Recent Enrollments</h3>
            </div>
            <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left">
                    <tr>
                        <th className="px-5 py-3 border-b border-slate-100 text-slate-500 font-medium">Student</th>
                        <th className="px-5 py-3 border-b border-slate-100 text-slate-500 font-medium">Course</th>
                        <th className="px-5 py-3 border-b border-slate-100 text-slate-500 font-medium">Enrolled On</th>
                        <th className="px-5 py-3 border-b border-slate-100 text-slate-500 font-medium">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {recent.map((row) => (
                        <tr key={row.id} className="border-b border-slate-50 hover:bg-slate-50">
                            <td className="px-5 py-3 text-slate-700">{row.userName}</td>
                            <td className="px-5 py-3 text-slate-500">{row.courseName}</td>
                            <td className="px-5 py-3 text-slate-400">{row.enrolledOn}</td>
                            <td className="px-5 py-3 capitalize text-slate-600">{row.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RecentEnrollments