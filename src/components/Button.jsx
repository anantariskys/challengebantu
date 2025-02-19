import { Icon } from "@iconify/react";

const Button = ({
  children,
  icon,
  iconPosition = "left",
  variant = "primary",
  className,
  ...props
}) => {

  const variants = {
    primary: "bg-[#0A65CC] text-white hover:bg-blue-600",
    secondary:"",
    "primary-outline":"",
    "secondary-outline":"",
  };

  return (
    <button
      className={`flex items-center gap-2 px-8 py-2 rounded transition-all ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && <Icon icon={icon} className="w-5 h-5" />}
      {children}
      {icon && iconPosition === "right" && <Icon icon={icon} className="w-5 h-5" />}
    </button>
  );
};

export default Button;
