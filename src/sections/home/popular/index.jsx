import React from "react";
import popular from "./data/popular";
import Card from "./components/Card";

const Popular = () => {
  return (
    <section className="bg-white">
      <main className="container py-24 space-y-8">
        <h2 className="text-4xl font-medium">Lowongan Paling Populer</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-4 gap-y-8">
          {popular.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Popular;
