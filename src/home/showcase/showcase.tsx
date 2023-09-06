import React, { useEffect, useRef, useState } from "react";
import { HorizontalTramlines, VerticalTramlines } from "./tramlines/tramlines";
import w3d from "../../assets/showcase/w3d.png";
import cozette from "../../assets/showcase/cozette.png";
import willemse from "../../assets/showcase/willemse.png";
import { ShowcaseItem } from "./shocase_item/showcase_item";
export const Showcase: React.FC = () => {
  const pictures = [w3d, cozette, willemse];
  const itemKeys = ["w3d", "cozette", "willemse"];
  return (
    <div className="flex flex-col w-full pb-8 mt-8">
      {itemKeys.map((itemKey, index) => (
        <div className="w-full flex flex-col">
          <ShowcaseItem index={index} pictures={pictures} itemKey={itemKey} />
          <HorizontalTramlines direction={index % 2 === 0 ? "right" : "left"} />
        </div>
      ))}
    </div>
  );
};
