import React from "react";
import { createRoot } from "react-dom/client";

import { animals } from "./animals";

const title = "";
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const images = [];

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

function displayFact(e) {
  const selectedAnimal = animals[e.target.alt];
  const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
  const funFact = selectedAnimal.facts[optionIndex];
  document.getElementById("fact").innerHTML = funFact;
}

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an Animal for a fun Fact" : title}</h1>
    {background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);
const container = document.getElementById("app");

const root = createRoot(container);
root.render(animalFacts);
