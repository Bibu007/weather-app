import { convertUnit } from "./convertUnit.js";
import { removeLoader, showErrorMsg, showLoader } from "./errorDialog.js";
import { getUnit, setUnit } from "./index.js";
import { loadJSON } from "./loadJSON.js";
import { updateForcastContainer } from "./updateForecastGenerator.js";
import { updateGrid } from "./updateGrid.js";
import { updateMainTile } from "./updateMainTile.js";

let data;

export async function updateScreen(place) {
  try {
    data = await loadJSON(place);
  } catch (error) {
    showErrorMsg();
  }

  removeLoader();
  updateMainTile(data);
  updateGrid(data);
  updateForcastContainer(data);

  if (getUnit() === "C") {
    setUnit();
    convertUnit(data);
  }
}

export function getData() {
  return data;
}
