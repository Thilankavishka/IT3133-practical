import { useState } from "react";
import animals from "../AnimalsDb";
import "../assets/gamecom.css";

export default function Gamecom() {
  const [targetAnimal, setTargetAnimal] = useState(getRandomAnimal());
  const [result, setResult] = useState(null);

  function getRandomAnimal() {
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex];
  }

  const handleAnimalClick = (id) => {
    if (id === targetAnimal.id) {
      setResult("Win");
    } else {
      setResult("Lose");
    }
  };

  const restartGame = () => {
    setTargetAnimal(getRandomAnimal());
    setResult(null);
  };
  return (
    <>
      <div className="game-page">
        <h1>Animal Matching Game</h1>
        <div className="game-header">
          <h2>Find: {targetAnimal.name}</h2>
        </div>
        <div className="animal-grid">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="animal-card"
              onClick={() => handleAnimalClick(animal.id)}
            >
              <img src={animal.img} alt={animal.name} />
              <p>{animal.name}</p>
            </div>
          ))}
        </div>
        {result && (
          <div className="result">
            <h2>{result}</h2>
            <button onClick={restartGame}>Play Again</button>
          </div>
        )}
      </div>
    </>
  );
}
