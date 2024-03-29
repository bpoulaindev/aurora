import React from "react";

export const VerticalTramlines: React.FC<{
  ref?: any;
  style?: any;
  classes?: {
    container?: string;
    corner?: string;
    line?: string;
  };
  direction?: "left" | "right";
  withCorner?: boolean;
}> = ({ ref, style, classes, direction, withCorner = false }) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col ${classes?.container}`}
      style={style}
    >
      {withCorner && (
        <div
          className={`w-2 h-2 sm:w-4 sm:h-4 bg-transparent border-[2px] border-indigo-300 min-w-[16px] sm:min-w-[32px] ${
            classes?.corner
          } ${direction === "right" ? "rounded-tl-full" : "rounded-tr-full"}`}
        />
      )}
      <div
        className={`border-x-[2px] border-indigo-300 bg-transparent min-w-[16px] sm:min-w-[32px] w-2 sm:w-4 ${classes?.line}`}
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
        className={`w-2 h-2 sm:w-4 sm:h-4 bg-transparent border-[2px] border-indigo-300 min-w-[16px] sm:min-w-[32px] ${
          classes?.corner
        } ${direction === "right" ? "rounded-bl-full" : "rounded-tl-full"}`}
      />
      <div
        className={`flex bg-transparent border-y-[2px] border-indigo-300 w-full h-2 sm:h-4 ${classes?.line}`}
      />
      <div
        className={`w-2 h-2 sm:w-4 sm:h-4 bg-transparent border-[2px] border-indigo-300 min-w-[16px] sm:min-w-[32px] ${
          classes?.corner
        } ${direction === "right" ? "rounded-tr-full" : "rounded-br-full"}`}
      />
    </div>
  );
};
