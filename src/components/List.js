import React from 'react'

const List = (props) => {
  return (
    <div>
        <h3 className='text-gray-600 py-2'>{props.listItem}</h3>
    </div>
  )
}

export default List