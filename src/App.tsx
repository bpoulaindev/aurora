import React, { useState, useEffect } from "react";
import { Navbar } from "./components/navbar/navbar";
import myself from "./assets/myself.png";
import "../i18n.config";
import { Trans } from "react-i18next";
import { LanguageContext } from "./hooks/languageContext";
import { Home } from "./home/home";

function App() {
  const userLanguage = navigator.language || "fr";
  const [language, setLanguage] = useState(userLanguage);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="flex min-h-screen w-full h-full flex-col">
        <Navbar />
        <Home />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
