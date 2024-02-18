import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-white text-3xl bg-orange-500 text-center">
        Currency Convertor
      </h1>
    </>
  );
}

export default App;
