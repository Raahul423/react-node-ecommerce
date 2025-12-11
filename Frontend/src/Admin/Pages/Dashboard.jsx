import '../Components/Style.css'
import { DashboardHeader } from '../Components/DashboardComponents/DashboardHeader'
import DashboardProducts from '../Components/DashboardComponents/DashboardProducts'
import DashboardOrders from '../Components/DashboardComponents/DashboardOrders'
import DashboardChart from '../Components/DashboardComponents/DashboardChart'


const Dashboard = () => {
  return (
     <section>
      <DashboardHeader/>
      <DashboardProducts/>
      <DashboardOrders/>
      <DashboardChart/>
    </section>
   
  )
}


export default Dashboard
