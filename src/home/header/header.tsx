import { Trans } from "react-i18next";
import myself from "../../assets/myself.png";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-center w-full items-center px-16 mt-22">
      <div className="flex flex-col pr-32">
        <span className="text-lg text-dark-300">
          <Trans i18nKey="Home.subtitle" />
        </span>
        <span className="text-3xl sm:text-3xl tracking-wide font-medium">
          Créateur d'expériences utilisateurs fluides et intuitives.
          <span className="text-3xl ml-1 sm:text-3xl tracking-wide text-indigo-500 font-medium">
            Aurora
          </span>
        </span>
      </div>
      <img src={myself} alt="myself" className="h-40 w-auto" />
    </div>
  );
};
