import { Icon } from '@iconify/react'
import React from 'react'

const Card = ({item}) => {
  return (
    <div className='w-full hover:bg-white duration-300 ease-in-out group rounded-md p-6 gap-4 flex flex-col items-center'>
        <div className='bg-white group-hover:bg-primary duration-200 ease-in-out rounded-full p-4 w-fit'>
            <Icon className='text-2xl text-primary duration-200 ease-in-out group-hover:text-white' icon={item.icon}/>
        </div>
        <h3 className='text-lg text-center font-medium'>{item.title}</h3>
        <p className='text-center text-sm'>{item.description}</p>

    </div>
  )
}

export default Card
