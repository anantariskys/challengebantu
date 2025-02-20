import Image from "next/image";
import React from "react";
import HeroIMG from "@/assets/home/heroIMG.png";
import SearchGroup from "./components/SearchGroup";
import LiveCount from "./components/LiveCount";
const Hero = () => {
  return (
    <header className=" bg-[#F1F2F4]  ">
      <main className="container w-full min-h-[50vh] py-8 flex items-center justify-center">
        <div className="flex  md:flex-row flex-col md:gap-4 gap-12 items-center justify-between w-full">
          <div className="max-w-2xl w-full space-y-3 ">
            <h1 className="text-4xl font-medium">
              Temukan Pekerjaan yang Sesuai dengan Minat & Keahlian Anda
            </h1>
            <p className="text-sm">
              Menemukan pekerjaan yang sesuai dengan keterampilan dan minat Anda
              adalah langkah penting dalam membangun karier yang sukses.
            </p>
            <SearchGroup />
            <small>
              Suggestion: Designer, Programming,{" "}
              <span className="text-[#0A65CC]">Digital Marketing,</span> Video,
              Animation.
            </small>
          </div>
          <div className="w-full  max-w-md">
            <Image
              src={HeroIMG}
              alt="hero-img"
              className=" w-full"
              draggable={false}
              loading="lazy"
            />
          </div>
        </div>
      </main>
      <LiveCount/>
     
    </header>
  );
};

export default Hero;
