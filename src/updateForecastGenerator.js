import { iconImageGenerator } from "./iconImageGenerator.js";
import { format } from "date-fns";

export function updateForcastContainer(data) {
  const forecastGrid = document.querySelector("#forecast-container");
  forecastGrid.textContent = "";
  for (let i = 0; i < 10; i++) {
    const tile = document.createElement("div");
    tile.className = "day-tile";
    const day = document.createElement("div");
    day.className = "day";
    const icon = document.createElement("div");
    icon.className = "icon";
    const image = document.createElement("img");
    image.setAttribute("src", `${iconImageGenerator(data.days[i].icon)}`);
    icon.appendChild(image);
    const range = document.createElement("div");
    range.className = "range";
    range.dataset.index = i;

    const date = new Date(data.days[i].datetime);
    day.textContent = format(date, "EEE");
    range.innerHTML = `${Math.floor(data.days[i].tempmax)}<sup>o</sup> / ${Math.floor(data.days[i].tempmin)}<sup>o</sup>`;

    tile.appendChild(day);
    tile.appendChild(icon);
    tile.appendChild(range);

    forecastGrid.appendChild(tile);
  }
}

/*
<div class="day-tile">
            <div class="day">Today</div>
            <div class="icon"><img src="./images/partly_cloudy.png" alt=""></div>
            <div class="high">32 / 24</div>
        </div>
        */
