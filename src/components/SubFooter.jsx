import React from 'react'

const SubFooter = () => {
  return (
    <div className='py-7 mt-10 bg-[#F7F5F0] flex justify-center'>
      <div className='flex flex-col gap-12 w-[75%]'>
        <h1 className='font-semibold text-2xl'>PayPal helps your gifts do more good</h1>
        <div className='flex justify-center gap-4'>
        <div className='flex flex-col gap-2'>
          <img src="https://www.shutterstock.com/image-vector/hand-insert-coin-into-donate-600nw-415812373.jpg" className='size-20' alt="" />
          <h1 className='font-bold text-lg'>Safe and Secure donations</h1>
          <p className='font-medium text-wrap text-lg'>Charities are in good standing so you can donate more securely.</p>
        </div>
        <div className='flex flex-col gap-2'>
          <img src="https://cdn-icons-png.flaticon.com/512/401/401176.png" className='size-20' alt="" />
          <h1 className='font-bold text-lg'>No transaction fees</h1>
          <p className='font-medium text-wrap text-lg'>Help charities pay less in fees and do more with your donation.</p>
        </div>
        <div className='flex flex-col gap-2'>
          <img src="https://media.istockphoto.com/id/864307286/vector/open-envelope-with-a-document-new-letter-sending-correspondence.jpg?s=612x612&w=0&k=20&c=uhjGupwwE4UNhylECoseMUfFCirs62eR8oUazgu8T4Q=" className='size-20 bg-black' alt="" />
          <h1 className='font-bold text-lg'>Receive a tax-receipt</h1>
          <p className='font-medium text-wrap text-lg'>A record of your kindness is sent right to your email.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SubFooter