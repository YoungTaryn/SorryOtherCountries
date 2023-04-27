var sorryElements = document.getElementsByTagName("option");
var elArray = Array.from(sorryElements);
for (let i = 0; i < elArray.length; i++) {
  if (elArray[i].text === "UAE" || elArray[i].text === "UK" || elArray[i].text === "United Arab Emirates" || elArray[i].text === "United Kingdom") {
    elArray[i].parentNode.removeChild(elArray[i]);
    console.log("Sorry United Not States of America");
  }
}
