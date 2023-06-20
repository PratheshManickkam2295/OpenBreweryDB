const BreweriesList = document.getElementById("Breweries");
let Brewery;

BreweriesList.addEventListener("change", function (event) {
  displayBreweryInfo(event.target.value);
});
async function getBreweriesData() {
  try {
    const url = "https://api.openbrewerydb.org/v1/breweries";
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("ERROR", error);
  }
}
getBreweriesData();
fetch("https://api.openbrewerydb.org/v1/breweries")
  .then(res => res.json())
  .then(data => initialize(data))
  .catch(err => console.log("Error:", err));

function initialize(BreweriesData) {
  Breweries = BreweriesData;
  let options = "";
  Breweries.forEach(Brewery => options += `<option value="${Brewery.id}">${Brewery.name}</option>`)
  BreweriesList.innerHTML = options;
  displayBreweryInfo("5128df48-79fc-4f0f-8b52-d06be54d0cec");
}
function displayBreweryInfo(BreweryByid) {
  const BreweryData = Breweries.find(Brewery => Brewery.id === BreweryByid);
  console.log(BreweryData);
  document.getElementById("Brewery Type").innerHTML = BreweryData.brewery_type;
  document.getElementById("Brewery Address").innerHTML = BreweryData.address_1;
  document.getElementById("Website URL").innerHTML = BreweryData.website_url;
  document.getElementById("Phone").innerHTML = BreweryData.phone;
}