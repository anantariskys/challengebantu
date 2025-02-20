"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import testimonials from "./data/testimonial";
import TestimonialCard from "./components/TestimonialCard";

const Testimonial = () => {
  const splideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.splide.on("move", (newIndex) => {
        setActiveIndex(newIndex);
      });
    }
  }, []);

  return (
    <section className="md:py-24 py-10 bg-[#F1F2F4]">
      <main className="container space-y-4 md:space-y-8">
        <h2 className="text-4xl font-medium text-center">Clients Testimonial</h2>
        <div className="flex md:hidden gap-2">
        <button
            className="block md:hidden  bg-white p-2 active:scale-95 rounded-sm shadow-md hover:bg-gray-200 transition-all"
            onClick={() => splideRef.current?.go("-3")}
          >
            <Icon icon="ic:baseline-arrow-back" className="w-6 h-6 text-primary" />
          </button>
          <button
            className="block md:hidden  bg-white p-2 active:scale-95 rounded-sm shadow-md hover:bg-gray-200 transition-all"
            onClick={() => splideRef.current?.go("+3")}
          >
            <Icon icon="ic:baseline-arrow-forward" className="w-6 h-6 text-primary" />
          </button>
        </div>
        <div className="relative">
          {/* Custom Prev Button */}
          <button
            className="absolute md:block hidden left-[-50px] top-1/2 transform -translate-y-1/2 bg-white p-2 active:scale-95 rounded-sm shadow-md hover:bg-gray-200 transition-all"
            onClick={() => splideRef.current?.go("-3")}
          >
            <Icon icon="ic:baseline-arrow-back" className="w-6 h-6 text-primary" />
          </button>

          <Splide
            ref={splideRef}
            options={{
              type: "loop",
              perPage: itemsPerPage,
              perMove: itemsPerPage,
              
              drag: false, 
              breakpoints: {
                1024: { perPage: 2, perMove: 2 },
                768: { perPage: 1, perMove: 1 },
              },
              gap: "1rem",
              pagination: false,
              arrows: false,
            }}
          >
            {testimonials.map((item, index) => (
              <SplideSlide className="py-4" key={index}>
                <TestimonialCard item={item} />
              </SplideSlide>
            ))}
          </Splide>

          {/* Custom Next Button */}
          <button
            className="absolute md:block hidden right-[-50px] top-1/2 transform -translate-y-1/2 bg-white p-2 active:scale-95 rounded-sm shadow-md hover:bg-gray-200 transition-all"
            onClick={() => splideRef.current?.go("+3")}
          >
            <Icon icon="ic:baseline-arrow-forward" className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => splideRef.current?.go(index * itemsPerPage)}
              className={`transition-all rounded-full ${
                activeIndex >= index * itemsPerPage && activeIndex < (index + 1) * itemsPerPage
                  ? "bg-primary h-2 aspect-video"
                  : "w-2 bg-[#99C2FF] aspect-square scale-125"
              }`}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Testimonial;
