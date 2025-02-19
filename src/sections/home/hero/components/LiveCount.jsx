
import liveCount from '../data/liveCount'
import { Icon } from '@iconify/react'

const LiveCount = () => {

  return (
    <section className="container grid gap-4 md:grid-cols-4 pb-16">
    {liveCount.map((item, index) => (
      <div tabIndex={index} key={index} className={`flex focus:shadow-md duration-300 ease-in-out bg-white w-full rounded-md p-4 items-center gap-4`}>
        <div  className="p-2 aspect-square w-20 flex items-center justify-center rounded-md text-white bg-primary">
          <Icon icon={item.icon} className="text-4xl"/>
        </div>
          <div>
            <h3 className="text-2xl font-medium">{item.count}</h3>
            <p>{item.label}</p>
          </div>

      </div>
    ))}
  </section>
  )
}

export default LiveCount
