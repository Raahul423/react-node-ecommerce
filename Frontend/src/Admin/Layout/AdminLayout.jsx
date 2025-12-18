import { useContext } from 'react';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { Navigate, Outlet } from 'react-router-dom'
import { AdminContext } from '../../AdminAuthProvider';


const AdminLayout = () => {
    const { adminIsAuth,authloading } = useContext(AdminContext);

    if(authloading){
        return <div>Loading ...</div>
    }

  if (!adminIsAuth) {
    return <Navigate to="/admin/login" replace />;
  }

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
