import React from 'react'
import { assets } from '../../assets/assets'

const Dashboard = () => {

const [dashboardData, setDashboardData] = React.useState({ 
 
        blogs : 0,
        comments : 0,
        drafs : 0,  
        recentBlogs : [],


 })

 // Simulating fetching data from an API

  return (
    <div  className='flex-1 p-4 md:p-10 bg-blue-50/50'>

        <div className='flex flex-wrap gap-4' >

            <div>

                <img src={assets.dashboard_icon_1} alt="" />

                <div>

                    <p>{}</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Dashboard


// 2:26:38