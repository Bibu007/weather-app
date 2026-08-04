import clearDay from "./images/clear-day-img.jpg";
import clearNight from "./images/clear-night-img.jpg";
import partlyCloudyDay from "./images/partly-cloudy-day-img.jpg";
import partlyCloudyNight from "./images/partly-cloudy-night-img.jpg";
import cloudy from "./images/partly-cloudy-day-img.jpg";
import rain from "./images/rain-img.jpg";
import snow from "./images/snow-img.jpg";
import sleet from "./images/sleet-img.jpg";
import wind from "./images/wind-img.jpg";
import fog from "./images/fog-img.jpg";

export async function updateMainTile(data) {
  const place = document.querySelector("#place");
  const temp = document.querySelector("#temp");
  const desc = document.querySelector("#desc");
  const highLow = document.querySelector("#main-high-low");

  const str = data.resolvedAddress;
  const shortStr = str.split(",")[0];
  const resolvedPlace = shortStr.charAt(0).toUpperCase() + shortStr.slice(1);
  place.textContent = resolvedPlace;
  const sup = document.createElement("sup");
  sup.textContent = "o";

  temp.textContent = Math.floor(data.currentConditions.temp);
  temp.appendChild(sup);
  desc.textContent = data.currentConditions.conditions;
  highLow.innerHTML = `H:${Math.floor(data.days[0].tempmax)}<sup>o</sup> | L:${Math.floor(data.days[0].tempmin)}<sup>o</sup>`;

  const mainTile = document.querySelector("#main-tile");
  //console.log(data.days[0].hours[0].icon);
  //mainTile.backgroundImage = `url(${bgImageGenerator(data.days[0].hours[0].icon)})`;
  //mainTile.style.backgroundImage = "url('./images/rain-img.jpg')";
  //mainTile.style.backgroundColor = "red";
  const url = bgImageGenerator(data.days[0].hours[0].icon);
  console.log(`url(${url})`);
  mainTile.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImageGenerator(data.currentConditions.icon)})`;
}

export function bgImageGenerator(icon) {
  const bgMap = {
    "clear-day": clearDay,
    "clear-night": clearNight,
    "partly-cloudy-day": partlyCloudyDay,
    "partly-cloudy-night": partlyCloudyNight,
    cloudy: cloudy,
    rain: rain,
    snow: snow,
    sleet: sleet,
    wind: wind,
    fog: fog,
  };

  return bgMap[icon];
}
