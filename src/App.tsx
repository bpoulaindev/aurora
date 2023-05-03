import { useState } from "react";
import { Button } from "./design_system/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center w-full h-full min-h-screen bg-cream">
      <Button color="indigo" variant="soft">
        test
      </Button>
    </div>
  );
}

export default App;
