export async function loadCountries() {
  try {
    // Fetch country names from REST Countries API
    const response = await fetch(
      "https://api.restcountries.com/countries/v5?response_fields=names.common&pretty=1",
      {
        headers: {
          Authorization: "Bearer rc_live_c7a612051c29425eae86241f7c2d452d",
        },
      },
    );
    const countryList = await response.json();
    const countryNames = countryList.data.objects.map(
      (item) => item.names.common,
    );

    console.log(countryNames);

    const datalist = document.getElementById("countries");

    // Sort country names alphabetically
    //const countryNames = data.map((c) => c.name.common).sort();

    // Populate options into datalist
    countryNames.forEach((country) => {
      const option = document.createElement("option");
      option.value = country;
      datalist.appendChild(option);
    });
  } catch (error) {
    console.error("Failed to load countries:", error);
  }
}

// Load list when the page loads
loadCountries();
