import React from "react";
import SectionLayout from "../layouts/SectionLayout";
import featured from "./data/featured";
import Card from "./components/Card";

const FeaturedJob = () => {
  return (
    <SectionLayout border={"border-t"} title={"Featured job"}>
      <main className="grid gap-4">
        {
            featured.map((item, index) => (
                <Card key={index} item={item}/>
            ))
        }
      </main>
    </SectionLayout>
  );
};

export default FeaturedJob;
