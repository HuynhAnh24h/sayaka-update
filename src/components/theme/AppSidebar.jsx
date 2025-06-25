import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Logo from "@/assets/logo.png"
import { RouterName } from "../../helpers/RouterName"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"
const AppSidebar = () => {
    const { pathname } = useLocation()
    return (
        <Sidebar>
            <SidebarHeader className="flex items-center justify-center p-4 bg-gray-800">
                <div className="relative w-20 h-20">
                    {/* Lớp hiệu ứng đèn chạy */}
                    <div className="absolute inset-0 z-0 rounded-md border-4 border-transparent bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 animate-border bg-[length:200%_200%]" />

                    {/* Nền trắng bên trong */}
                    <div className="absolute inset-1 z-10 bg-white rounded-md shadow-md" />

                    {/* Logo nằm trên cùng */}
                    <img src={Logo} alt="Logo" className="absolute inset-1 z-20 w-full h-full object-cover" />
                </div>
            </SidebarHeader>
            <SidebarContent className="bg-gray-800">
                <SidebarGroup>
                    {RouterName.map((item) => (
                        <SidebarMenuItem key={item.name} className="list-none">
                            <SidebarMenuButton asChild>
                                <Link
                                    to={item.path}
                                    className={cn(
                                        "flex items-center gap-2 px-3 py-2 rounded-md transition-colors list-none",
                                        "hover:bg-muted/50",
                                        pathname === item.path
                                            ? "bg-cyan-500 text-white font-semibold shadow"
                                            : "text-white"
                                    )}>
                                    {item.icon}
                                    <span className="">{item.name}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="bg-gray-800">

            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar