import React from "react";
import { Header } from "./header/header";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col relative items-center w-full h-full min-h-screen bg-cream">
      <Header />
    </div>
  );
};
