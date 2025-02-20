'use client'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Icon } from "@iconify/react";
import topCompany from "./data/topCompany";
import Card from "./components/Card";
import { useRef } from "react";

const TopCompany = () => {
  const splideRef = useRef(null);

  return (
    <section className="bg-white">
      <main className="container pb-10 md:pb-24 space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-medium">Top companies</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => splideRef.current?.go("<-1")}
              className="p-2 bg-[#E7F0FA] rounded text-primary active:scale-95 transition-transform"
            >
              <Icon icon="ic:round-arrow-back" className="text-2xl" />
            </button>
            <button
              onClick={() => splideRef.current?.go("+1")}
              className="p-2 bg-[#E7F0FA] rounded text-primary active:scale-95 transition-transform"
            >
              <Icon icon="ic:round-arrow-forward" className="text-2xl" />
            </button>
          </div>
        </div>
        <Splide
          ref={splideRef}
          options={{
            type: "loop",
            perPage: 4,
            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              480: { perPage: 1 },
            },
            gap: "1rem",
            pagination: false,
            arrows: false,
          }}
        >
          {topCompany.map((item, index) => (
            <SplideSlide key={index}>
              <Card item={item} />
            </SplideSlide>
          ))}
        </Splide>
      </main>
    </section>
  );
};

export default TopCompany;
