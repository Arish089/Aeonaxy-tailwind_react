import React from 'react'
import ReactCountryFlag from 'react-country-flag'

const Footer = () => {
  return (<>
    <div className='pt-10'>
        <div className='w-[75%] m-auto'>
        <p className='font-semibold text-sm'>Paypal covers all transaction fees. You're donating to PayPal Giving Fund, a 501(c)(3) charity,<span className='text-sky-600'> subject to its terms.</span>
         Donation can<span className='text-sky-600'> take upto 45 days</span> to get to your chosen charity. It's rare, but if
          <span className='text-sky-600'> we can't send your money to this charity</span>, we'll ask you to recommend another.
          If we can't reach you, we'll send it to a similar charity and keep you updated. Your donation is typically tax-deductible in the US.</p>
        </div>
        <div className='px-5'>
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" className='size-44' alt="" />
        </div>
        <div className='max-md:flex md:block max-md:gap-6'>
        <div className='flex max-md:justify-start justify-between items-center max-md:flex-col py-4 '>
            <div className='flex max-md:flex-col gap-6'>
            <div className='font-bold text-blue-900'>Help</div>
            <div className='font-bold text-blue-900'>Contact</div>
            <div className='font-bold text-blue-900'>Fees</div>
            <div className='font-bold text-blue-900'>Security</div>
            <div className='font-bold text-blue-900'>Apps</div>
            <div className='font-bold text-blue-900'>Shop</div>
            <div className='font-bold text-blue-900'>Enterprise</div>
            <div className='font-bold text-blue-900'>Partners</div>
            </div>
            <div>
            <ReactCountryFlag countryCode="US" svg style={{width: "1.5em",height: "1.5em"}}/>
            </div>
        </div>
        <hr />
        <div className='flex md:justify-between items-center py-4 flex-wrap'>
            <div className='flex  max-md:flex-col gap-6'>
            <div className='font-bold text-blue-900'>About</div>
            <div className='font-bold text-blue-900'>Newsrooms</div>
            <div className='font-bold text-blue-900'>Jobs</div>
            <div className='font-bold text-blue-900'>Investors Relations</div>
            <div className='font-bold text-blue-900'>Values in Action</div>
            <div className='font-bold text-blue-900'>Public Policy</div>
            <div className='font-bold text-blue-900'>Sitemap</div>
            </div>
            <div className='flex max-md:flex-col gap-6'>
                <div className='font-bold text-blue-900'>ⓒ1999-2022</div>
                <div className='font-bold text-blue-900'>Accessibility</div>
                <div className='font-bold text-blue-900'>Privacy</div>
                <div className='font-bold text-blue-900'>Cookies</div>
                <div className='font-bold text-blue-900'>Legal</div>
            </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer