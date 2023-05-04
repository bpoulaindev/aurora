import React from "react";
import { AuroraLogo } from "../../assets/aurora_logo";

export const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`${className} flex w-full items-center h-10 bg-cream border-b-2 border-dark-300 px-4 py-2`}
    >
      <AuroraLogo className="h-6 w-6 ml-4" />
      <span className="text-2xl ml-2 text-dark-300 font-semibold">Aurora</span>
    </div>
  );
};
