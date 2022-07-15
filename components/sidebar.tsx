import React from 'react'
import Image from 'next/image'
import mypic from '../public/dp.jpg'

const Sidebar = () => {
  return (
    <div>
      <div className='flex justify-center p-4'>
      <div className='rounded-full px-1.5 pt-1.5 bg-emerald-500 shadow-2xl shadow-emerald-600 hover:bg-pink-700 hover:shadow-pink-800 bg-blend-lighten'>
      <Image
            src={mypic}
            alt="Avatar of Arpan M"
            width="150px"
            height="150px"
            className='rounded-full'
            placeholder='blur'
      />
      </div>
      </div>
        <div className='flex justify-center font'>
          <h2>Arpan M with ❤ </h2>
        </div>
        
    </div>
  )
}

export default Sidebar  