import React, { useState } from "react";
import { HorizontalTramlines, VerticalTramlines } from "./tramlines/tramlines";
import w3d from "../../assets/showcase/w3d.png";
import cozette from "../../assets/showcase/cozette.png";
import { ShowcaseItem } from "./shocase_item/showcase_item";

export const Showcase: React.FC = () => {
  const pictures = [w3d, cozette];
  const itemKeys = ["w3d", "cozette"];
  return (
    <div className="flex flex-col w-full pb-8 mt-8">
      {itemKeys.map((itemKey, index) => (
        <div className="w-full flex flex-col">
          <div
            className={`flex items-start justify-between w-full h-full ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <VerticalTramlines
              classes={{
                container: `${
                  index % 2 === 0 ? "mr-2 sm:mr-8" : "ml-2 sm:ml-8"
                } ${index === 0 ? "h-70 sm:h-48" : "h-80 sm:h-52"}`,
                line: index === 0 ? "h-70 sm:h-48" : "h-80 sm:h-52",
              }}
              direction="right"
              withCorner={index === 0}
            />
            <ShowcaseItem
              image={pictures[index]}
              className={`${index != 0 && "mt-4"}`}
              itemKey={itemKey}
              textPlacement={index % 2 === 0 ? "left" : "right"}
            />
          </div>
          <HorizontalTramlines direction={index % 2 === 0 ? "right" : "left"} />
        </div>
      ))}
    </div>
  );
};
