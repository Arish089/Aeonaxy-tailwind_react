import React from 'react'
import '.././App.css'
import { FaWallet } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

const MainBody = () => {
  return (
    <div className=' w-[85%] max-md:w-[98%] m-auto'>
      <div className='container bg-blue-800'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3vUZ3lhOV3n-gyURhDGkU1USuNsXtkaBPFGwzU4pmIQ&s"  alt="" />
      </div>
      <div className='flex max-md:flex-col'>
      <div className='pt-24 md:px-5 md:w-[60%]'>
        <p className='font-semibold'>Donate to PayPal Giving Fund</p>
        <p className='font-semibold text-4xl my-1'>Figures of Speech Theatre</p>
        <p className="inline-block bg-cyan-100 text-blue-800 px-2 py-1 rounded-full font-semibold text-sm my-4">
          Arts & Culture
          </p>
          <p className='font-semibold text-lg'>Freeport, ME</p>
          <p className='font-semibold text-lg'> EIN: 01-0432620</p>
          <div className='flex gap-4 my-4'>
            
            <div className='w-12 h-12 bg-[#F7F5F0] flex justify-center rounded-full items-center'>
              <FaWallet color='blue' size={20}/>
            </div>
            <div className='w-12 h-12 bg-[#F7F5F0] flex justify-center rounded-full items-center'>
              <FaHeart color='red' size={20}/>
            </div>
          </div>
          <p className='font-semibold text-base'>Figures of Speech Theatre creates and tours visionary works of performance forged at the intersection of poetry, music, sculpture and dance
            The company has toured all over the world - from Sofia, Bulgaria to Tokyo, Japan, to Lima, Peru. Besides performing at venues such as the Kennedy Center, the Smithsonian Institution,
             and the New Victory Theatre on Broadway, the company retains a strong commitment to teaching and performing throughout its home state of Maine.
            </p><br />
            <p className='font-semibold text-sm'>Source: PayPal Giving Fund charity profile</p><br />
            <p>The info in this profile is provided and managed by the charities themselves</p>
      </div>
      <div className='md:w-[35%] py-32 max-md:px-2 px-5'>
        <div className='flex flex-col justify-between gap-6'>
        <div className='grid grid-cols-3 max-md:grid-cols-2 gap-4 text-center'>
        <div className='shadow-lg border border-separate p-4 rounded-md'>$25</div>
        <div className='shadow-lg border border-separate p-4 rounded-md'>$50</div>
        <div className='shadow-lg border border-separate p-4 rounded-md'>$100</div>
        <div className='shadow-lg border border-separate p-4 rounded-md'>$200</div>
        <div className='shadow-lg border border-separate p-4 rounded-md'>Other</div>
        </div>

        <div>
        <div className='flex items-center gap-2'>
          <input type="checkbox" />
          <p className='font-semibold'>Share my name and email with this charity.</p>
        </div>
        <button className='border border-separate rounded-3xl bg-blue-800 text-gray-200 p-2 px-6 my-2'>Donate now</button>
        </div>
        <div>
          <ul className='list-disc text-sm font-semibold'>
          <li>Paypal covers all transaction fees.</li>
          <li>You're donating to PayPal Giving Fund, a 501(c)(3) charity,<span className='text-sky-600'> subject to its terms</span></li>
          <li>Donation can<span className='text-sky-600'> take upto 45 days</span> to get to your chosen charity. It's rare, but if
          <span className='text-sky-600'> we can't send your money to this charity</span>, we'll ask you to recommend another.</li>
          <li>If we can't reach you, we'll send it to a similar charity and keep you updated. Your donation is typically tax-deductible in the US.</li>
          </ul>
          </div>
        <div className='flex flex-col justify-around items-center rounded-lg border border-separate gap-4 py-5 px-3'>
          <div className='text-center font-bold'>Share and inspire others</div>

          <div className='flex gap-3'>
          <div className='w-10 h-10 bg-[#F7F5F0] flex justify-center rounded-full items-center'>
              <FaTwitter color='blue' size={16}/>
            </div>
            <div className='w-10 h-10 bg-[#F7F5F0] flex justify-center rounded-full items-center'>
              <FaFacebook color='blue' size={16}/>
            </div>
            <div className='w-10 h-10 bg-[#F7F5F0] flex justify-center rounded-full items-center'>
              <FaEnvelope color='blue' size={16}/>
            </div>
          </div>
          <div className='text-wrap max-lg:flex-col max-md:gap-4 flex bg-[#F7F5F0] px-2 items-center py-10 rounded-lg'>
            <a href="">https://www.paypal.com/US
            /fundraiser
            /charity/1279469</a>
            <button className='border-2 border-separate border-blue-700 bg-white rounded-3xl p-1 px-3'>Copy</button>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default MainBody