import React from "react";

export const Checkbox: React.FC<{
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  priority?: string; // Change any to string
}> = ({ checked, onChange, priority }) => {
  const getColor = (priority: string) => {
    switch (priority) {
      case "Priority 1":
        return "border-red-500 bg-red-500";
      case "Priority 2":
        return "border-orange-500 bg-orange-500";
      case "Priority 3":
        return "border-blue-500 bg-blue-500";
      default:
        return "border-gray-400 bg-gray-400";
    }
  };

  const colorClasses = getColor(priority);

  return (
    <div className="inline-flex items-center mt-1">
      <label
        className="relative flex items-center rounded-full cursor-pointer"
        htmlFor="customStyle"
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={`before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border ${colorClasses} transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-${colorClasses} checked:bg-${colorClasses} checked:before:bg-${colorClasses} hover:scale-105 hover:before:opacity-0`}
          id="customStyle"
        />
        <span
          className={`absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 z-20"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1" // Fix strokeWidth attribute
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
    </div>
  );
};
