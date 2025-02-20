import { Icon } from '@iconify/react'
import React from 'react'
import how from './data/how'
import Card from './components/Card'

const How = () => {
  return (
    <section className='md:py-24 py-10  bg-[#F1F2F4] '>
      <main className='container space-y-4  md:space-y-8'>
        <h2 className='md:text-4xl text-xl font-medium text-center'>Cara Kerja Bantu</h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 md:gap-4'>
          {
            how.map((item, index) => (
              <Card  item={item} key={index}/>
            ))
          }
         

        </div>

      </main>
      
    </section>
  )
}

export default How
