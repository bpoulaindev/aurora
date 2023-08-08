import React from "react";
import { HorizontalTramlines, VerticalTramlines } from "./tramlines/tramlines";
import w3d from "../../assets/showcase/w3d.png";

export const Showcase: React.FC = () => {
  return (
    <div className="flex flex-col w-full pb-8 mt-8">
      <div className="flex items-start justify-between w-full h-full">
        <VerticalTramlines
          classes={{
            container: "mr-4 h-48",
            line: "h-40",
          }}
          direction="right"
          withCorner
        />
        <div className="flex h-full w-full">
          <div className="flex flex-col items-start w-full">
            <span className="text-sm md:text-base text-dark-300">
              Août 2021 - Août 2023
            </span>
            <span className="text-lg md:text-xl">
              <span className="text-indigo-500">WeLoveDevs</span> - Développeur
              Web
            </span>
          </div>
          <img src={w3d} alt="w3d" className="h-32 w-auto" />
        </div>
      </div>
      <HorizontalTramlines />
      <div className="flex items-start justify-between w-full h-full">
        <div className="flex flex-col items-center justify-center w-full bg-red-300 rounded-lg h-46 mt-4"></div>
        <VerticalTramlines
          classes={{
            container: "ml-4",
            line: "h-56",
          }}
        />
      </div>
      <HorizontalTramlines direction="left" />
    </div>
  );
};
