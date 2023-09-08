import React from "react";
import { Header } from "./header/header";
import { Showcase } from "./showcase/showcase";
import { Button } from "../design_system/button";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/20/solid";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col relative items-center w-full h-full min-h-screen bg-cream px-4 xs:px-8 lg:px-12 xl:px-16">
      <Header />
      <Showcase />
      <Button
        className="fixed bottom-2 right-2"
        component="a"
        href="mailto:bpoulainpro@gmail.com"
        color="indigo"
      >
        <ChatBubbleOvalLeftEllipsisIcon className="w-3 h-3 mr-1" />
        Me contacter
      </Button>
    </div>
  );
};
