function setConfiguration() {
  const selector = document.getElementById('constellationSelector');
  const constellation = selector.options[selector.selectedIndex].value;
  ConstellationSketcher.setConstellation(constellation);
}

function populateSelector(selector) {
  selector.innerHTML = "";
  const names = [...ConstellationSketcher.constellationNames];
  names.sort()
  for (const name of names) {
      const option = document.createElement("option");
      option.value = name;
      option.innerHTML = name;
      if (name === ConstellationSketcher.getConstellation())
          option.selected = true;
      selector.appendChild(option);
  }
}

function updateDisplay(id, value) {
  if (parseFloat(value) != parseInt(value))
      value = parseFloat(value).toFixed(2);
  document.getElementById(id + "Display").innerHTML = value;
}

ConstellationSketcher.setDrawBeginCallback((_, constellation) => {
  const next = ConstellationSketcher.getNextConstellation();
  if (next !== null)
      document.getElementById("subtitle").innerHTML = "Next: " + next;
  else
      document.getElementById("subtitle").innerHTML = "&nbsp";
});