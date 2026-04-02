import { users, courses, enrollments } from '../data/dummyData'

const getStatusBadge = (status) => {
    if (status === 'completed') {
        return (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-600">
                Completed
            </span>
        )
    }
    return (
        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-yellow-600">
            Ongoing
        </span>
    )
}

const RecentEnrollments = () => {
    const recent = enrollments
        .slice(-6)
        .reverse()
        .map((enrollment) => {
            const user = users.find((u) => u.id === enrollment.userId)
            const course = courses.find((c) => c.id === enrollment.courseId)
            return {
                id: enrollment.id,
                userName: user?.name ?? 'Unknown User',
                courseName: course?.title ?? 'Unknown Course',
                enrolledOn: enrollment.enrolledOn,
                status: enrollment.status,
            }
        })

    return (
        <div className="bg-white rounded-xl border border-slate-200">

            {/* header */}
            <div className="px-5 py-4 border-b border-slate-200">
                <h3 className="text-base font-semibold text-slate-800">
                    Recent Enrollments
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                    Latest 6 enrollment activities
                </p>
            </div>

            {/* table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm">

                    {/* head */}
                    <thead>
                        <tr className="border-b border-slate-200 bg-slate-50">
                            <th className="text-left px-5 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                                Student
                            </th>
                            <th className="text-left px-5 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                                Course
                            </th>
                            <th className="text-left px-5 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                                Enrolled On
                            </th>
                            <th className="text-left px-5 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                                Status
                            </th>
                        </tr>
                    </thead>

                    {/* body */}
                    <tbody>
                        {recent.map((row, index) => (
                            <tr
                                key={row.id}
                                className={`border-b border-slate-100 hover:bg-slate-50 transition-colors
                  ${index === recent.length - 1 ? 'border-b-0' : ''}`}
                            >
                                <td className="px-5 py-3.5 font-medium text-slate-700">
                                    {row.userName}
                                </td>
                                <td className="px-5 py-3.5 text-slate-500">
                                    {row.courseName}
                                </td>
                                <td className="px-5 py-3.5 text-slate-400">
                                    {row.enrolledOn}
                                </td>
                                <td className="px-5 py-3.5">
                                    {getStatusBadge(row.status)}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default RecentEnrollments