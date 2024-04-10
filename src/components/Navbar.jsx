import React, { useState } from 'react'
import {FaPaypal} from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [show,setShow] = useState(false)
  return (
    <>
    
    <div className='flex justify-between p-8 max-md:hidden'>
        <div className='nav1 flex justify-between items-center gap-10 font-semibold '>
            <div>
                <FaPaypal color='blue' size={24}/>
            </div>
            <div> <p>Personal</p> </div>
            <div> <p>Business</p> </div>
            <div> <p>Developer</p> </div>
            <div> <p>Help</p> </div>
        </div>
        <div className='flex items-center gap-4'>
            <button className='border-2 border-separate border-blue-800 p-1 px-7 rounded-full text-blue-800 font-semibold
            hover:bg-blue-800 hover:text-white'>My PayPal</button>
            <button className='border-2 border-separate border-blue-800 p-1 px-7 rounded-full text-blue-800 font-semibold
            hover:bg-blue-800 hover:text-white'>Logout</button>
        </div>
    </div>
    <hr color='red' className='border border-separate ' />
    
    <div className='md:hidden'
    >
      <FaBars onClick={()=>setShow(!show)}/>
      {show &&
      <div className='flex  justify-between p-6 bg-[#F7F5F0]'>
        <div className='nav1 flex flex-col justify-between items-center gap-10 font-semibold '>
            <div>
                <FaPaypal color='blue' size={24}/>
            </div>
            <div> <p>Personal</p> </div>
            <div> <p>Business</p> </div>
            <div> <p>Developer</p> </div>
            <div> <p>Help</p> </div>
        </div>
        <div className='flex flex-col  justify-center items-center gap-4'>
            <button className='border-2 border-separate border-blue-800 p-1 px-7 rounded-full text-blue-800 font-semibold
            hover:bg-blue-800 hover:text-white'>My PayPal</button>
            <button className='border-2 border-separate border-blue-800 p-1 px-7 rounded-full text-blue-800 font-semibold
            hover:bg-blue-800 hover:text-white'>Logout</button>
        </div>
    </div>
}
    </div>
    </>
  )
}

export default Navbar