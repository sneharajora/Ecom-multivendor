import React, { useState } from 'react'
import { useNavigate } from 'react-router';
   
  const cart = {
    products: [
        {
            name:"Stylish Jacket",
            size:"M",
            color:"Black",
            price: 120,
            image: "https://picsum.photos/150?random=1",
        },
         {
            name:"Casual Sneakers",
            size:"42",
            color:"White",
            price: 75,
            image: "https://picsum.photos/150?random=2",
        },
    ],
    totalPrice: 195,
  };

const Checkout = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
          firstName:"",
          lastName:"",
          Address:"",
          City:"",
          PostalCode:"",
          Country:"",
          Phone:"",

    })
    
  return (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
           {/* Light section */}
           <div className='bg-white rounded-lg p-6'>
                <h2 className='text-2xl uppercase mb-6'>Checkout</h2>
                <form>
                    <h3>Contact Details</h3> 
                     <div className='mb-4'>
                      <label className='block text-gray-700 '>Email</label>
                       <input
                         type="email"
                         value="user@example.com"
                         className='w-full p-2 mt-2 border rounded'
                       />
                     </div>
                      <h3 className='text-lg mb-4'>Delivery</h3>
                      <div className=' mb-4 grid-cols-2 gap-4'>
                         <div>
                            <label className='block text-gray-700'>First Name</label>
                            <input  className='w-1/2 border-1 rounded p-1 pl-3'
                              type="text"
                               placeholder='First Name'
                               value={formData.firstName}
                               onChange={(e)=>setFormData({...formData,firstName:e.target.value})}

                            />
                         </div>
                         <div>
                            <label className='block text-gray-700'>Last Name</label>
                            <input  className='w-fullborder-1 rounded p-1 pl-3'
                               type="text"
                               placeholder='First Name'
                              
                            />
                         </div>
                      </div>

                </form>
           </div>
      </div>
  )
}

export default Checkout