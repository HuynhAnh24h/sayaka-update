import { Outlet } from 'react-router-dom'
import {SidebarProvider} from '@/components/ui/sidebar'
import { AppSidebar } from '../components/theme'
import { Header,Footer } from '@/components/theme'
const MainLayout = () => {
    return (
        <>
            <Header />
              <SidebarProvider>
                <AppSidebar />
               <main>
                    <Outlet />
               </main>
              </SidebarProvider>
              <Footer />
        </>
    )
}

export default MainLayout   