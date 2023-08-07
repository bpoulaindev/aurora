import React from "react";
import { AuroraLogo } from "../../assets/aurora_logo";
import { Button } from "../../design_system/button";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`${className} flex w-full justify-between items-center h-10 bg-cream border-b-2 border-dark-300 px-4 py-2`}
    >
      <div className="flex items-center">
        <AuroraLogo className="h-6 w-6 ml-4" />
        <span className="text-2xl ml-2 text-dark-300 font-semibold">
          Baptiste Poulain
        </span>
      </div>
      <div className="flex items-center"></div>
      <Button color="indigo" variant="soft">
        Mon CV
        <ArrowTopRightOnSquareIcon className="h-2 w-2 ml-1" />
      </Button>
    </div>
  );
};
