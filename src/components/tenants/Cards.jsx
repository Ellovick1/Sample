import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className='bg-[#7F3DFF] rounded p-5 text-white'>
            <h1 className='font-bold text-lg'>{props.value}</h1>
            <h1 className='font-medium mt-2'>{props.description}</h1>
        </div>
    </div>
  )
}

export default Card