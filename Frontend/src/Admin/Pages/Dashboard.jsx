import '../Components/Style.css'
import { DashboardHeader } from '../Components/DashboardComponents/DashboardHeader'
import DashboardProducts from '../Components/DashboardComponents/DashboardProducts'
import DashboardOrders from '../Components/DashboardComponents/DashboardOrders'
import DashboardChart from '../Components/DashboardComponents/DashboardChart'


const Dashboard = () => {
  return (
     <section className='pl-75 pr-3 bg-[#f2f2f2] py-5'>
      <DashboardHeader/>
      <DashboardProducts/>
      <DashboardOrders/>
      <DashboardChart/>
    </section>
   
  )
}


export default Dashboard
