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

  temp.textContent = data.days[0].temp;
  temp.appendChild(sup);
  desc.textContent = data.days[0].conditions;
  highLow.textContent = `H:${data.days[0].tempmax} | L:${data.days[0].tempmin}`;
}
