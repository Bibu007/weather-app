import { getUnit, setUnit } from "./index.js";
import { getData } from "./updateScreen.js";

export function buttonAction() {
  const converter = document.querySelector("#converter");
  converter.addEventListener("click", () => {
    const data = getData();
    convertUnit(data);
  });
}

export function convertUnit(data) {
  console.log(`before: ${getUnit()}`);
  const temp = document.querySelector("#temp");
  console.log(temp.textContent);
  const feels = document.querySelector("#feels");
  const highLow = document.querySelector("#main-high-low");

  if (getUnit() === "F") {
    const tempInput = data.currentConditions.temp;
    const tempInCelsius = (tempInput - 32) * (5 / 9);
    temp.innerHTML = `${Math.floor(tempInCelsius)}<sup>o</sup>`;

    const mainHigh = Math.floor((data.days[0].tempmax - 32) * (5 / 9));
    const mainLow = Math.floor((data.days[0].tempmin - 32) * (5 / 9));
    highLow.innerHTML = `H:${mainHigh}<sup>o</sup> | L:${mainLow}<sup>o</sup>`;

    const feelsInput = data.currentConditions.feelslike;
    const feelsInCelsius = (feelsInput - 32) * (5 / 9);
    feels.innerHTML = `${Math.floor(feelsInCelsius)}<sup>o</sup>`;

    for (let i = 0; i < 10; i++) {
      const range = document.querySelector(`[data-index="${i}"]`);
      const highInput = data.days[i].tempmax;
      const lowInput = data.days[i].tempmin;

      const highInCelsius = (highInput - 32) * (5 / 9);
      const lowInCelsius = (lowInput - 32) * (5 / 9);

      range.innerHTML = `${Math.floor(highInCelsius)}<sup>o</sup> / ${Math.floor(lowInCelsius)}<sup>o</sup>`;
    }
  } else if (getUnit() === "C") {
    const tempInput = data.currentConditions.temp;
    temp.innerHTML = `${Math.floor(tempInput)}<sup>o</sup>`;

    const mainHigh = Math.floor(data.days[0].tempmax);
    const mainLow = Math.floor(data.days[0].tempmin);
    highLow.innerHTML = `H:${mainHigh}<sup>o</sup> | L:${mainLow}<sup>o</sup>`;

    const feelsInput = data.currentConditions.feelslike;
    feels.innerHTML = `${Math.floor(feelsInput)}<sup>o</sup>`;

    for (let i = 0; i < 10; i++) {
      const range = document.querySelector(`[data-index="${i}"]`);
      const highInput = data.days[i].tempmax;
      const lowInput = data.days[i].tempmin;

      range.innerHTML = `${Math.floor(highInput)}<sup>o</sup> / ${Math.floor(lowInput)}<sup>o</sup>`;
    }
  }
  //console.log(getUnit());
  setUnit();
  console.log(`after: ${getUnit()}`);
}
