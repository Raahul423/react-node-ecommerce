import React from 'react'
import Header from './Admin/Components/Header'
import Sidebar from './Admin/Components/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div className="grid grid-cols-[20%_80%] min-h-screen">

            <aside className="border border-gray-600/30 bg-white">
                <Sidebar />
            </aside>

            <main className="bg-gray-50 min-h-screen">
                <Header />
                <div className="p-4">
                    <Outlet />
                </div>
            </main>

        </div>
    )
}

export default AdminLayout
