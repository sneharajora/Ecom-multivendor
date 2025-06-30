import React from 'react'
import { MyOrderPage } from './MyOrderPage'

const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className='flex-grow container mx-auto p-4 md:p-6'>
            <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>
                 {/* left side */}
                 <div className='w-full md:1/3 lg:w-1/4  shadow-md rounded-lg p-6'>
                      <h1 className='text-2xl md:text-3xl font-bold mb-4'>John doe</h1>
                       <p className='text-gray-600 pb-2'>johndoe@gmail.com</p>
                      <p className='w-full bg-red-500 text-center text-white py-2 px-4 mb-20 rounded hover:bg-red-600  focus:border-gray-950'>
                        Logout
                      </p>
                 </div>
                    {/* right side */}

                 <div className=' w-full md:w-2/3 lg:w-3/4'>
                     <MyOrderPage/>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Profile