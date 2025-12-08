import React from 'react'
import Header from '../Components/Header'
import { DashboardHeader } from '../Components/DashboardComponents/DashboardHeader'
import DashboardProducts from '../Components/DashboardComponents/DashboardProducts'
import DashboardOrders from '../Components/DashboardComponents/DashboardOrders'


const Dashboard = () => {
  return (
    <section className='pl-75 pr-3 bg-[#f2f2f2] py-5'>
      <DashboardHeader/>
      <DashboardProducts/>
      <DashboardOrders/>
    </section>
  )
}


export default Dashboard
