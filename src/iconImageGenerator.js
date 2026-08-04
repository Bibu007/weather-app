import clearDay from "./images/clear-day-icon.png";
import clearNight from "./images/clear-night-icon.png";
import partlyCloudyDay from "./images/partly-cloudy-day-icon.png";
import partlyCloudyNight from "./images/partly-cloudy-night-icon.png";
import cloudy from "./images/partly-cloudy-day-icon.png";
import rain from "./images/rain-icon.png";
import snow from "./images/snow-icon.png";
import sleet from "./images/sleet-icon.png";
import wind from "./images/wind-icon.svg";
import fog from "./images/fog-icon.png";

export function iconImageGenerator(icon) {
  const iconMap = {
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

  return iconMap[icon];
}
