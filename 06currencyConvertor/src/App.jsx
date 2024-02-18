import { useState } from "react";
import { InputBox } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-white text-3xl bg-orange-500 text-center">
        Currency Convertor
      </h1>
      <InputBox />
    </>
  );
}

export default App;
