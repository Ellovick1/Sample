import React from 'react'

const Header = (props) => {
  return (
    <div className='relative py-8 flex'>
        <h1 className='font-semibold text-lg md:text-xl text-gray-700'>{ props.title }</h1>
        <div className='absolute right-4'>
            <div className='flex'>
                <img className='mr-4 w-5 h-5 md:w-7 md:h-7 hover:cursor-pointer' src='/images/Vector.png' />
                <img className='mr-4 w-5 h-5 md:w-7 md:h-7 hover:cursor-pointer' src='/images/image 9.png' />
                <img className='rounded-full w-5 h-5 md:w-7 md:h-7 hover:cursor-pointer' src='/images/home3.png' />
            </div> 
        </div>
    </div>
  )
}

export default Header