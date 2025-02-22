import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import liveCount from "../data/liveCount";

const LiveCount = () => {
  return (
    <section className="container grid gap-4 md:grid-cols-4 pb-16">
      {liveCount.map((item, index) => (
        <div
          tabIndex={index}
          key={index}
          className="flex focus:shadow-md duration-300 ease-in-out bg-white w-full rounded-md p-4 items-center gap-4"
        >
          <div className="p-2 aspect-square w-16 flex items-center justify-center rounded-md text-white bg-primary">
            <Icon icon={item.icon} className="text-4xl" />
          </div>
          <div>
            <AnimatedCount count={item.count} />
            <p className="text-sm">{item.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

const AnimatedCount = ({ count }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const targetCount = Number(count.replace(/\./g, ""));
    if (isNaN(targetCount) || targetCount <= 0) {
      setCurrentCount(0);
      return;
    }

    let start = 0;
    const duration = 2000;
    const steps = 60; 
    const stepTime = Math.max(duration / steps, 16);
    const increment = Math.max(1, Math.floor(targetCount / steps));

    const timer = setInterval(() => {
      start += increment;
      setCurrentCount((prev) => {
        const nextValue = prev + increment;
        return nextValue >= targetCount ? targetCount : nextValue;
      });

      if (start >= targetCount) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [count]);

  return <h3 className="text-xl font-medium">{currentCount.toLocaleString()}</h3>;
};

export default LiveCount;
