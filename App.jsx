import React from "react";
import { createRoot } from "react-dom/client";
import { animals } from "./animals";

const title = "";
const images = [];

function displayFact(e) {
  const selectedAnimal = animals[e.target.alt];
  const animalInfo = selectedAnimal.facts;

  const optionIndex = Math.floor(Math.random() * animalInfo.length);
  const funFact = animalInfo[optionIndex];

  document.getElementById("fact").innerHTML=funFact;
}
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

const background = (
  <img src="/images/ocean.jpg" alt="ocean" className="background" />
);
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(animalFacts);

