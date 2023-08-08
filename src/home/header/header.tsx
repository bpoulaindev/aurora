import { Trans } from "react-i18next";
import myself from "../../assets/myself.png";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between w-full items-center mt-8 sm:mt-22">
      <div className="flex flex-col sm:pr-8">
        <span className="text-base md:text-lg text-dark-300">
          <Trans i18nKey="Home.subtitle" />
        </span>
        <span className="text-xl md:text-3xl tracking-wide font-medium">
          <Trans
            i18nKey="Home.title"
            components={[<span className="text-indigo-500" />]}
          />
        </span>
      </div>
      <img src={myself} alt="myself" className="h-16 md:h-32 lg:h-40 w-auto" />
    </div>
  );
};
