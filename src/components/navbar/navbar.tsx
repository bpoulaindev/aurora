import React, { useCallback, useContext, useEffect } from "react";
import { AuroraLogo } from "../../assets/aurora_logo";
import { Button } from "../../design_system/button";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import France from "../../assets/france.svg";
import UK from "../../assets/uk.svg";
import { LanguageContext } from "../../hooks/languageContext";
import Cookies from "js-cookie";
import { Trans, useTranslation } from "react-i18next";
import pdf from "../../assets/bpoulain_resume_minimized.pdf";

export const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { i18n } = useTranslation();
  console.log("language", language);
  const setLanguageInCookie = (selectedLanguage: "en" | "fr") => {
    Cookies.set("language", selectedLanguage, { expires: 365 }); // Set the language in a cookie, expiring in 365 days
  };
  const changeLanguage = useCallback(() => {
    if (language === "fr") {
      setLanguage("en");
      setLanguageInCookie("en");
      i18n
        .changeLanguage("en")
        .then(() => console.log("language settings have been updated"));
    } else {
      setLanguage("fr");
      setLanguageInCookie("fr");
      i18n
        .changeLanguage("fr")
        .then(() => console.log("language settings have been updated"));
    }
  }, [i18n, language, setLanguage]);
  useEffect(() => {
    const savedLanguage = Cookies.get("language") as "en" | "fr";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, [setLanguage]);
  return (
    <div
      className={`${className} flex w-full justify-between items-center h-10 bg-cream border-b-2 border-dark-300 px-2 sm:px-4 py-2`}
    >
      <div className="flex items-center">
        <AuroraLogo className="h-4 w-4 sm:h-6 sm:w-6 sm:ml-4" />
        <span className="text-lg sm:text-2xl ml-1 sm:ml-2 text-dark-300 font-semibold">
          Baptiste Poulain
        </span>
      </div>
      <div className="flex items-center"></div>
      <div className="flex items-center">
        <Button
          color="indigo"
          variant="text"
          className="!p-1 mr-1 sm:mr-2"
          onClick={changeLanguage}
        >
          {language === "en" ? (
            <img
              src={France}
              alt="france"
              className="h-2.5 w-2.5 sm:h-3 sm:w-3"
            />
          ) : (
            <img src={UK} alt="france" className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
          )}
        </Button>
        <Button
          component="a"
          target="_blank"
          href={pdf}
          rel="noopener noreferrer"
          color="indigo"
          variant="soft"
        >
          <Trans i18nKey="Navbar.resume" />
          <ArrowTopRightOnSquareIcon className="h-2 w-2 ml-1" />
        </Button>
      </div>
    </div>
  );
};
