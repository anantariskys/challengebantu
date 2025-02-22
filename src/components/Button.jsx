import { Icon } from "@iconify/react";

const Button = ({
  children,
  icon,
  iconPosition = "left",
  variant = "primary",
  className,
  width="w-fit",
  ...props
}) => {

  const variants = {
    primary: "bg-primary text-white ",
    secondary:"bg-[#E7F0FA] text-primary hover:bg-primary hover:text-[#E7F0FA]",
    tertiary:"bg-white text-primary ",
    "primary-outline":"",
    "secondary-outline":"",
    'transparent':'bg-transparent border text-primary'
  };

  return (
    <button
      className={`flex items-center gap-2 justify-center active:scale-95 px-8 py-2 rounded transition-all ${variants[variant]} ${width} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && <Icon icon={icon} className="w-5 h-5" />}
      {children}
      {icon && iconPosition === "right" && <Icon icon={icon} className="w-5 h-5" />}
    </button>
  );
};

export default Button;
