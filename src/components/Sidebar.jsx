import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, BookOpen } from "lucide-react";

const navItems = [
    { label: "Dashboard", path: "/", icon: LayoutDashboard },
    { label: "Users", path: "/users", icon: Users },
    { label: "Courses", path: "/courses", icon: BookOpen },
];

const Sidebar = () => {
    return (
        <aside className="w-60 min-h-screen bg-white border-r border-slate-200 flex flex-col">
            {/* Logo */}
            <div className="px-6 py-5 border-b border-slate-200">
                <h1 className="text-xl font-bold text-indigo-600 tracking-wide">GRED</h1>
                <p className="text-xs text-slate-400 mt-0.5">Admin Dashboard</p>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-3 py-4 space-y-1">
                {navItems.map(({ label, path, icon: Icon }) => (
                    <NavLink
                        key={path}
                        to={path}
                        end
                        className={({ isActive }) => `
                            flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                            ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'}
                            `}
                    >
                        <Icon size={18} />
                        {label}
                    </NavLink>

                ))}
            </nav>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-200">
                <p className="text-xs text-slate-400">GRED Platform</p>
            </div>
        </aside>
    );
};

export default Sidebar;