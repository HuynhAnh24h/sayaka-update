import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header,Footer } from '../components/theme'
const MainLayout = () => {
    return (
        <>
            <Header />
                <main>
                    {<Outlet />}
                    <Footer />
                </main>
        </>
    )
}

export default MainLayout   