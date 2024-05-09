import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
           <div className="bg-[#232D3F] mb-3 h-screen">
   
      <div className="text-center text-[2rem] p-5 font-extrabold text-white border-b-2  mb-10">
        Control Panel
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 gap-7">
          <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 flex justify-center items-center  flex-col bg-white rounded-lg">
            <h1 className="text-center font-extrabold text-[1.4rem]  p-2 text-[#58401d] ">USERS</h1>
            <p className="text-sm text-center">
              The user section in the control panel enables administrators to
              efficiently manage user accounts, define access permissions
              through role-based controls, and implement security features such
              as password management and activity logs.
            </p>
            <Link to="/dashboard/users" className="bg-[#febc5a] hover:bg-[#58401d] text-white font-bold py-2 px-4 rounded m-3 w-full text-center">Open</Link>
          </div>

        
          <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 flex justify-center items-center  flex-col bg-white rounded-lg">
            <h1 className="text-center font-extrabold text-[1.4rem]  p-2 text-[#58401d] ">PRODUCT</h1>
            <p className="text-sm text-center">
              The Product section facilitates the recording, monitoring, and
              analysis of financial or product records, providing a
              transparent and organized view of activities such as new product, or other relevant interactions within the system.
            </p>
             <Link to="/dashboard/product" className="bg-[#febc5a] hover:bg-[#58401d] text-white font-bold py-2 px-4 rounded m-3 w-full text-center">Open</Link>
          </div>



     

    

        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard