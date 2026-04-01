import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, BookOpen } from "lucide-react";

const navItems = [
    { label: "Dashboard", path: "/", icon: LayoutDashboard },
    { label: "Users", path: "/users", icon: Users },
    { label: "Courses", path: "/courses", icon: BookOpen },
];

const Sidebar = () => {
    return (
        <aside>
            {/* Logo */}
            <div>
                <h1>GRED</h1>
                <p>Admin Dashboard</p>
            </div>

            {/* Nav Links */}
            <nav>
                {navItems.map(({ label, path, icon: Icon }) => (
                    <div key={path}>
                        <NavLink to={path} end>
                            <Icon size={18} />
                            {label}
                        </NavLink>
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div>
                <p>GRED Platform</p>
            </div>
        </aside>
    );
};

export default Sidebar;