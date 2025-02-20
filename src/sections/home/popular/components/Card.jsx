import React from "react";

const Card = ({item}) => {
  return (
    <div className="w-full border-l-2 pl-2 py-1 border-primary">
      <h3 className="font-medium">{item.job_title}</h3>
      <p className="text-sm">{item.open_positions} Lowongan Tersedia</p>
    </div>
  );
};

export default Card;
