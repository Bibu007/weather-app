import "./styles.css";
import { searchUtility } from "./searchUtility.js";
import { updateScreen } from "./updateScreen.js";
import { buttonAction } from "./convertUnit.js";
import { removeLoader, showLoader } from "./errorDialog.js";

showLoader();
let unit = "F";

export function getUnit() {
  return unit;
}

export function setUnit() {
  if (unit === "F") {
    unit = "C";
  } else if (unit === "C") {
    unit = "F";
  }
}

updateScreen("Kochi");
removeLoader();
buttonAction();
searchUtility();
