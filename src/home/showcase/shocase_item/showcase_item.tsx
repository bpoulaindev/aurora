import React, { useEffect, useRef, useState } from "react";
import { VerticalTramlines } from "../tramlines/tramlines";
import { Trans } from "react-i18next";

export const ShowcaseItem: React.FC<{
  index: number;
  pictures: string[];
  itemKey: string;
}> = ({ index, pictures, itemKey }) => {
  const [showcaseItemHeight, setShowcaseItemHeight] = useState(0);
  const showcaseItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Calculate the height of the ShowcaseItem after rendering
    console.log("showcaseItemRef", showcaseItemRef);
    if (showcaseItemRef.current) {
      const height = showcaseItemRef.current.getBoundingClientRect().height;
      setShowcaseItemHeight(height);
    }
  }, [index, pictures]);
  return (
    <div
      className={`flex items-start justify-between w-full h-full ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <VerticalTramlines
        classes={{
          container: `${index % 2 === 0 ? "mr-2 sm:mr-8" : "ml-2 sm:ml-8"}`,
          line: "h-full",
        }}
        style={{ height: `${showcaseItemHeight + 16}px` }}
        direction="right"
        withCorner={index === 0}
      />
      <div
        ref={showcaseItemRef}
        className={`flex flex-col sm:flex-row h-full w-full ${
          index != 0 && "pt-4"
        } ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
      >
        <div
          className={`flex flex-col items-start w-full sm:w-1/2 ${
            index % 2 === 0 ? "sm:pr-4" : "sm:pl-4"
          }`}
        >
          <span className="text-sm md:text-base text-dark-300">
            <Trans i18nKey={`Showcase.${itemKey}.date`} />
          </span>
          <span className="text-lg md:text-xl font-semibold">
            <Trans
              i18nKey={`Showcase.${itemKey}.title`}
              components={[<span className="text-indigo-500" />, <br />]}
            />
          </span>
          <span className="text-sm md:text-base text-dark-500 mt-2">
            <Trans
              i18nKey={`Showcase.${itemKey}.description`}
              components={[
                <span className="text-indigo-500 font-medium" />,
                <br />,
              ]}
            />
          </span>
        </div>
        <div
          className={`relative w-full h-min sm:w-1/2 mt-2 sm:mt-4 sm:mt-0 flex sm:pb-2 ${
            index % 2 === 0 ? "sm:pr-4" : "sm:pl-4"
          }`}
        >
          <img
            src={pictures[index]}
            alt="w3d"
            className="object-cover w-full hover:transform hover:scale-[1.05] hover:transition-transform duration-300 cursor-pointer transform-gpu"
          />
        </div>
      </div>
    </div>
  );
};
