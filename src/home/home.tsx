import React from "react";
import { Header } from "./header/header";
import { Showcase } from "./showcase/showcase";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col relative items-center w-full h-full min-h-screen bg-cream px-4 xs:px-8 lg:px-16">
      <Header />
      <Showcase />
    </div>
  );
};
