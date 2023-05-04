import { Button } from "./design_system/button";
import React, { useState, useEffect } from "react";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <div className="flex min-h-screen w-full h-full flex-col">
      <Navbar />
      <div className="flex flex-col justify-center relative items-center w-full h-full min-h-screen bg-cream">
        <Button color="indigo" variant="soft" className="hidden">
          test
        </Button>
        <span className="text-4xl sm:text-6xl tracking-wide font-bold">
          Welcome to{""}
          <span className="text-4xl ml-1 sm:text-6xl tracking-wide text-indigo-500 font-bold">
            Aurora
          </span>
        </span>
      </div>
    </div>
  );
}

export default App;
