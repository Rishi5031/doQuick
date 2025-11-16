import { useState } from "react";
import { LayoutDashboard, Briefcase, Users, ChevronRight, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function DashboardLayout() {
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        toast.success("Logged out successfully");
        navigate("/login");
    };

    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "Services", icon: Briefcase },
        { name: "Users", icon: Users },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
                {/* Logo/Brand */}
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">DQ</span>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">DoQuick</h2>
                            <p className="text-xs text-gray-500">Admin Panel</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                    <ul className="space-y-1">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeMenu === item.name;

                            return (
                                <li key={item.name}>
                                    <button
                                        onClick={() => setActiveMenu(item.name)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                                            ? "bg-blue-50 text-blue-700"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <Icon
                                                className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"
                                                    }`}
                                            />
                                            <span className="font-medium text-sm">{item.name}</span>
                                        </div>
                                        {isActive && (
                                            <ChevronRight className="w-4 h-4 text-blue-600" />
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* User Info & Logout */}
                <div className="p-4 border-t border-gray-100 space-y-3">
                    {/* User Profile */}
                    <div className="flex items-center space-x-3 px-2 py-2">
                        <div className="w-9 h-9 bg-linear-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-gray-600 font-semibold text-sm">AD</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-700 truncate">Admin User</p>
                            <p className="text-xs text-gray-500 truncate">admin@gmail.com</p>
                        </div>
                    </div>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group"
                    >
                        <LogOut className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                        <span className="text-sm font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-auto">
                <div className="max-w-7xl mx-auto">
                    {/* Demo Content */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-1">
                            {activeMenu}
                        </h1>
                        <p className="text-gray-500 text-sm">
                            Manage your {activeMenu.toLowerCase()} efficiently
                        </p>
                    </div>

                    {/* Placeholder Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
                                <h3 className="font-semibold text-gray-800 mb-2">Card Title {i}</h3>
                                <p className="text-sm text-gray-500">
                                    Your content will be displayed here
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}