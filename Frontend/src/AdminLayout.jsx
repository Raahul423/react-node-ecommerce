import React from 'react'
import Header from './Admin/Components/Header'
import Sidebar from './Admin/Components/Sidebar'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <>
    <Header/>
    <Sidebar/>
    {Outlet}
    </>
  )
}

export default AdminLayout
