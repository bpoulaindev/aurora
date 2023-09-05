import React from "react";

export const Button: React.FC<{
  className?: string;
  children: React.ReactNode;
  component?: "button" | "a";
  rel?: string;
  target?: string;
  href?: string;
  variant?: "contained" | "soft" | "outlined" | "text";
  color?: "indigo" | "purple" | "green" | "red" | "dark";
  size?: "small" | "regular" | "large";
  staticSize?: boolean;
  onClick?: () => void;
}> = ({
  className = "",
  children,
  component = "button",
  rel = "",
  target = "",
  href = "",
  variant = "contained",
  color = "indigo",
  size = "regular",
  staticSize = false,
  onClick,
}) => {
  const colorClasses = {
    indigo: {
      global: "focus-visible:outline-indigo-600",
      contained: "bg-indigo-600 text-white hover:bg-indigo-500",
      soft: "bg-indigo-100 text-indigo-600 hover:bg-indigo-200",
      outlined:
        "bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-200",
      text: "bg-transparent text-indigo-600 hover:text-indigo-800",
    },
    purple: {
      global: "focus-visible:outline-purple-600",
      contained: "bg-purple-600 text-white hover:bg-purple-500",
      soft: "bg-purple-100 text-purple-600 hover:bg-purple-200",
      outlined:
        "bg-white border border-purple-600 text-purple-600 hover:bg-purple-200",
      text: "bg-transparent text-purple-600 hover:text-purple-800",
    },
    green: {
      global: "focus-visible:outline-green-600",
      contained: "bg-green-600 text-white hover:bg-green-500",
      soft: "bg-green-100 text-green-600 hover:bg-green-200",
      outlined:
        "bg-white border border-green-600 text-green-600 hover:bg-green-200",
      text: "bg-transparent text-green-600 hover:text-green-800",
    },
    red: {
      global: "focus-visible:outline-red-600",
      contained: "bg-red-600 text-white hover:bg-red-500",
      soft: "bg-red-100 text-red-600 hover:bg-red-200",
      outlined: "bg-white border border-red-600 text-red-600 hover:bg-red-200",
      text: "bg-transparent text-red-600 hover:text-red-800",
    },
    dark: {
      global: "focus-visible:outline-dark-600",
      contained: "bg-dark-600 text-white hover:bg-dark-500",
      soft: "bg-dark-100 text-dark-600 hover:bg-dark-200",
      outlined:
        "bg-white border border-dark-600 text-dark-600 hover:bg-dark-200",
      text: "bg-transparent text-dark-600 hover:text-dark-800",
    },
  };
  const variants = {
    contained: `text-white shadow-sm`,
    soft: `shadow-sm`,
    outlined: `shadow-sm`,
    text: `focus:shadow-sm`,
  };
  const staticClasses =
    "cursor-pointer rounded-lg flex items-center h-auto font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const sizeClasses = {
    small: "px-1 py-1/2 text-sm",
    regular: staticSize
      ? "px-2 py-1 text-base"
      : "sm:px-2 sm:py-1 sm:text-base px-1 py-1/2 text-sm",
    large: staticSize
      ? "px-4 py-2 text-lg"
      : "sm:px-4 sm:py-2 sm:text-lg px-1 py-1/2 text-sm",
  };
  return component === "button" ? (
    <button
      type="button"
      onClick={onClick}
      className={`${className} ${staticClasses} ${colorClasses[color].global} ${colorClasses[color][variant]} ${sizeClasses[size]} ${variants[variant]}}`}
    >
      {children}
    </button>
  ) : (
    <a
      onClick={onClick}
      rel={rel}
      href={href}
      target={target}
      className={`${className} ${staticClasses} ${colorClasses[color].global} ${colorClasses[color][variant]} ${sizeClasses[size]} ${variants[variant]}}`}
    >
      {children}
    </a>
  );
};
