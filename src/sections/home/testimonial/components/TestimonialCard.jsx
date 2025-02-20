import { Icon } from "@iconify/react";

const TestimonialCard = ({ item }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-3">
      <div className="flex justify-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full" />
      </div>
      <div className="flex justify-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            icon={index < item.rating ? "mdi:star" : "mdi:star-outline"}
            className="text-yellow-400 text-lg"
          />
        ))}
      </div>
      <p className="text-xs line-clamp-3">{item.text}</p>
      <h3 className="font-semibold">{item.name}</h3>
      <p className="text-sm">{item.role}</p>
    </div>
  );
};

export default TestimonialCard;
