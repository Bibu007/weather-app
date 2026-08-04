import { loadJSON } from "./loadJSON.js";
import { updateForcastContainer } from "./updateForecastGenerator.js";
import { updateGrid } from "./updateGrid.js";
import { updateMainTile } from "./updateMainTile.js";

export async function updateScreen(place) {
  let data;
  try {
    data = await loadJSON(place);
  } catch (error) {
    if (error.reponse.status == 404) {
      console.log("Data not found");
    } else {
      throw error;
    }
  }

  updateMainTile(data);
  updateGrid(data);
  updateForcastContainer(data);
}
