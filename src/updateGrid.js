export function updateGrid(data) {
  const feels = document.querySelector("#feels");
  const uv = document.querySelector("#uv");
  const prec = document.querySelector("#prec");
  const hum = document.querySelector("#hum");
  const vis = document.querySelector("#vis");
  const wind = document.querySelector("#wind");

  const sup = document.createElement("sup");
  sup.textContent = "o";
  feels.textContent = Math.floor(data.currentConditions.feelslike);
  feels.appendChild(sup);
  uv.textContent = data.currentConditions.uvindex;
  prec.textContent = data.currentConditions.precip;
  hum.textContent = `${Math.floor(data.days[0].humidity)}%`;
  //console.log(Math.floor(data.days[0].humidity));
  vis.textContent = Math.floor(data.currentConditions.visibility);
  wind.textContent = Math.floor(data.currentConditions.windspeed);
}
