import React, { createContext, useState } from "react";

interface LanguageContextType {
  language: "fr" | "en";
  setLanguage: React.Dispatch<React.SetStateAction<"fr" | "en">>;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  setLanguage: () => {},
});
