import Button from "@/components/Button";
import React from "react";
import popularCategory from "./data/popularCategory";
import Card from "./components/Card";
import SectionLayout from "../layouts/SectionLayout";

const PopularCategory = () => {
  return (
    <SectionLayout title={"Lowongan Paling Populer"}>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-4 gap-y-8">
        {popularCategory.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default PopularCategory;
