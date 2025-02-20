import CTA from "@/sections/home/cta";
import FeaturedJob from "@/sections/home/featured";
import Hero from "@/sections/home/hero";
import How from "@/sections/home/how";
import Popular from "@/sections/home/popular";
import PopularCategory from "@/sections/home/popularCategory";
import Testimonial from "@/sections/home/testimonial";
import TopCompany from "@/sections/home/topCompany";


export default function Home() {
  return (
  <>
  <Hero/>
  <Popular/>
  <How/>
  <PopularCategory/>
  <FeaturedJob/>
  <TopCompany/>
  <Testimonial/>
  <CTA/>
  
  </>
  );
}
