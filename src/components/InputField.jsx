import { Icon } from "@iconify/react";

const InputField = ({ icon, iconClass, className, ...props }) => {
  return (
    <div className="flex items-center overflow-hidden">
      {icon && (
        <span className={`pl-3 ${iconClass}`}>
          <Icon icon={icon} className="w-5 h-5" />
        </span>
      )}
      <input
        type="text"
        className={` outline-none flex-1 ${className}`}
        {...props}
      />
    </div>
  );
};

export default InputField;
