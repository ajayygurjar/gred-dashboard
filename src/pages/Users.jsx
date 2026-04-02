import { useState } from "react";
import { users } from "../data/dummyData";

const PER_PAGE = 8;

const Users = () => {
    const [search, setSearch] = useState("");
    const [role, setRole] = useState("all");
    const [page, setPage] = useState(1);

    const filtered = users.filter((u) =>
        (role === "all" || u.role === role) &&
        (u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase()))
    );

    const pages = Math.ceil(filtered.length / PER_PAGE);
    const list = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    return (
        <div className="p-2">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Users</h2>

            <div className="flex gap-2 mb-4">
                <input
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                    className="border px-3 py-1.5 rounded text-sm"
                />
                <select
                    value={role}
                    onChange={(e) => { setRole(e.target.value); setPage(1); }}
                    className="border px-3 py-1.5 rounded text-sm"
                >
                    <option value="all">All Roles</option>
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                </select>
            </div>

            <table className="w-full text-sm border-collapse bg-white rounded border">
                <thead className="bg-slate-50 text-left">
                    <tr>
                        <th className="px-4 py-2 border-b">Name</th>
                        <th className="px-4 py-2 border-b">Email</th>
                        <th className="px-4 py-2 border-b">Role</th>
                        <th className="px-4 py-2 border-b">Join Date</th>
                        <th className="px-4 py-2 border-b">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((u) => (
                        <tr key={u.id} className="border-b hover:bg-slate-50">
                            <td className="px-4 py-2">{u.name}</td>
                            <td className="px-4 py-2">{u.email}</td>
                            <td className="px-4 py-2 capitalize">{u.role}</td>
                            <td className="px-4 py-2">{u.joinDate}</td>
                            <td className="px-4 py-2 capitalize">{u.status}</td>
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

export default Users;