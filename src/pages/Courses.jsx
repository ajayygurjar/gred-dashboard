import { useState } from "react";
import { courses } from "../data/dummyData";

const PER_PAGE = 6;

const Courses = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [page, setPage] = useState(1);

    const categories = [...new Set(courses.map((c) => c.category))];

    const filtered = courses.filter((c) =>
        (category === "all" || c.category === category) &&
        (c.title.toLowerCase().includes(search.toLowerCase()) ||
            c.instructor.toLowerCase().includes(search.toLowerCase()))
    );

    const pages = Math.ceil(filtered.length / PER_PAGE);
    const list = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    return (
        <div className="p-2">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Courses</h2>

            <div className="flex gap-2 mb-4">
                <input
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                    className="border px-3 py-1.5 rounded text-sm"
                />
                <select
                    value={category}
                    onChange={(e) => { setCategory(e.target.value); setPage(1); }}
                    className="border px-3 py-1.5 rounded text-sm"
                >
                    <option value="all">All Categories</option>
                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
            </div>

            <table className="w-full text-sm border-collapse bg-white rounded border">
                <thead className="bg-slate-50 text-left">
                    <tr>
                        <th className="px-4 py-2 border-b">Title</th>
                        <th className="px-4 py-2 border-b">Instructor</th>
                        <th className="px-4 py-2 border-b">Category</th>
                        <th className="px-4 py-2 border-b">Enrollments</th>
                        <th className="px-4 py-2 border-b">Completion %</th>
                        <th className="px-4 py-2 border-b">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((c) => (
                        <tr key={c.id} className="border-b hover:bg-slate-50">
                            <td className="px-4 py-2">{c.title}</td>
                            <td className="px-4 py-2">{c.instructor}</td>
                            <td className="px-4 py-2">{c.category}</td>
                            <td className="px-4 py-2">{c.enrollments}</td>
                            <td className="px-4 py-2">{c.completionRate}%</td>
                            <td className="px-4 py-2 capitalize">{c.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex gap-1 mt-3">
                {Array.from({ length: pages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i + 1)}
                        className={`px-3 py-1 text-sm border rounded ${page === i + 1 ? "bg-indigo-600 text-white" : ""}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Courses;