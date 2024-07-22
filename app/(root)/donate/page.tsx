import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className=' mt-10 w-full h-full justify-center'>
        <Image className='justify-center items-center' src="/images/QR.JPG" alt="QR" width={400} height={400} />
        <h1 className='text-white-1 font-bold mt-2'>Donate $5 for continue using this site</h1>
    </div>
  )
}

export default page