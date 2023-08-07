import React, { createContext, useState } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  setLanguage: () => {},
});
