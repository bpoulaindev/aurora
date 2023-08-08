import React from "react";

export const VerticalTramlines: React.FC<{
  classes?: {
    container?: string;
    corner?: string;
    line?: string;
  };
  direction?: "left" | "right";
  withCorner?: boolean;
}> = ({ classes, direction, withCorner = false }) => {
  return (
    <div className={`flex flex-col h-full ${classes?.container}`}>
      {withCorner && (
        <div
          className={`w-4 h-4 bg-transparent border-[2px] border-indigo-300 min-w-[32px] ${
            classes?.corner
          } ${direction === "right" ? "rounded-tl-full" : "rounded-tr-full"}`}
        />
      )}
      <div
        className={`border-x-[2px] border-indigo-300 bg-transparent min-w-[32px] w-4 ${classes?.line}`}
      />
    </div>
  );
};

export const HorizontalTramlines: React.FC<{
  classes?: {
    container?: string;
    corner?: string;
    line?: string;
  };
  direction?: "left" | "right";
}> = ({ classes, direction = "right" }) => {
  return (
    <div className={`flex w-full items-center ${classes?.container}`}>
      <div
        className={`w-4 h-4 bg-transparent border-[2px] border-indigo-300 min-w-[32px] ${
          classes?.corner
        } ${direction === "right" ? "rounded-bl-full" : "rounded-tl-full"}`}
      />
      <div
        className={`flex bg-transparent border-y-[2px] border-indigo-300 w-full h-4 ${classes?.line}`}
      />
      <div
        className={`w-4 h-4 bg-transparent border-[2px] border-indigo-300 min-w-[32px] ${
          classes?.corner
        } ${direction === "right" ? "rounded-tr-full" : "rounded-br-full"}`}
      />
    </div>
  );
};
