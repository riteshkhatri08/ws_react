import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  //  son Goku props
  let sonGokuCardProps = {
    name: "Son Goku",
    designation: "Dragon Warrior, Earth",
    description: `“Son Goku, born Kakarot , is a Saiyan from Planet Vegeta in Universe
    6, raised on Earth and the main protagonist of the Dragon Ball series.
    He is the second born, as well as youngest son and child of Bardock
    and Gine, the husband of Chi-Chi, and the father of Gohan and Goten.”`,
    image: "/src/assets/goku-ui.jpg",
  };

  let vegetaCardProps = {
    name: "Vegeta",
    designation: "Prince of Planet Vegeta",
    description: `Vegeta, more specifically Vegeta IV, recognized as Prince Vegeta, is the prince of the fallen Saiyan race and the husband of Bulma, the father of Trunks and Bulla, the eldest son of King Vegeta, as well as one of the main characters of the Dragon Ball series.`,
    image: "/src/assets/vegeta-ue.jpg",
  };

  return (
    <>
      <h1 className="bg-blue-500 text-white p-4 rounded-xl m-4#3b82f6">
        Tailwind and React
      </h1>
      <Card values={sonGokuCardProps} />
      <Card values={vegetaCardProps} />
    </>
  );
}

export default App;
