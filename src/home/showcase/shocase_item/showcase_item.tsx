import React, { useState } from "react";
import { Trans } from "react-i18next";
import ReactPDF from "@react-pdf/renderer";
interface ShowcaseItemProps {
  image: string;
  className?: string;
  itemKey: string;
  textPlacement: "left" | "right";
}

export const ShowcaseItem: React.FC<ShowcaseItemProps> = ({
  image,
  className,
  itemKey,
  textPlacement,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setCursorPosition({ x: e.nativeEvent.clientX, y: e.nativeEvent.clientY });
  };
  return (
    <div
      className={`flex flex-col sm:flex-row h-full w-full ${className} ${
        textPlacement === "left" ? "sm:flex-row" : "sm:flex-row-reverse"
      }`}
    >
      <div
        className={`flex flex-col items-start w-full ${
          textPlacement === "left" ? "sm:pr-4" : "sm:pl-4"
        }`}
      >
        <span className="text-sm md:text-base text-dark-300">
          <Trans i18nKey={`Showcase.${itemKey}.date`} />
        </span>
        <span className="text-lg md:text-xl">
          <Trans
            i18nKey={`Showcase.${itemKey}.title`}
            components={[<span className="text-indigo-500" />, <br />]}
          />
        </span>
        <span className="text-sm md:text-base text-dark-300 mt-2">
          <Trans
            i18nKey={`Showcase.${itemKey}.description`}
            components={[
              <span className="text-indigo-500 font-medium" />,
              <br />,
            ]}
          />
        </span>
      </div>
      <div className="relative w-full mt-4 sm:mt-0">
        <img
          src={image}
          alt="w3d"
          style={{
            transformOrigin: `${cursorPosition.x / 40}% ${
              cursorPosition.y / 40
            }%`,
          }}
          onMouseMove={handleMouseMove}
          className="w-auto h-auto sm:h-40 hover:transform hover:scale-[1.05] hover:transition-transform duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
};
