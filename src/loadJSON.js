export async function loadJSON(place) {
  let response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=JBBS9SAPJPY9Z247E2L5FY9LE`,
  );

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(response);
  }
}
