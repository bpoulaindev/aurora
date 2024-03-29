import React, { useState } from "react";
import { Navbar } from "./components/navbar/navbar";
import "../i18n.config";
import { LanguageContext } from "./hooks/languageContext";
import { Home } from "./home/home";

function App() {
  const userLanguage = (navigator.language as "fr" | "en") || "fr";
  const [language, setLanguage] = useState<"fr" | "en">(userLanguage);
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
