const data = [
  {
    title: "Primary Colours",
    colours: [
      { name: "Dark Blue", value: "#002544" },
      { name: "AFL Red", value: "#cf0a2c" },
      { name: "Mid Blue", value: "#3082c0" },
      { name: "Light Blue", value: "#00c0f7" },
      { name: "Supercoach", value: "#399c07" },
    ],
  },
  {
    title: "Greys",
    colours: [
      { name: "Dark Grey", value: "#303030" },
      { name: "Storm", value: "#5e6d79" },
      { name: "Grey", value: "#9aa7b2" },
      { name: "Cloud", value: "#e7eaee" },
      { name: "Smoke", value: "#f2f3f4" },
    ],
  },
  {
    title: "Yellow through Blue Gradient",
    colours: [
      { name: "Yellow (960 < w)", value: "#ecdb60" },
      { name: "Light Green (768 < w <= 960)", value: "#a1cd73" },
      { name: "Mid Green (640 < w <= 768)", value: "#6fb37a" },
      { name: "Teal (530 < w <= 640)", value: "#3f9a82" },
      { name: "Dark Green (480 < w <= 530)", value: "#427676" },
      { name: "Dark Blue (w <= 480)", value: "#3b596a" },
    ],
  },
  {
    title: "AFL Team Colours",
    colours: [
      { name: "ADEL", value: "#fcdc01" },
      { name: "BL", value: "#8b1b3f" },
      { name: "CARL", value: "#1a3c68" },
      { name: "COLL", value: "#000" },
      { name: "ESS", value: "#d0112b" },
      { name: "FRE", value: "#542c89" },
      { name: "GEEL", value: "#00295d" },
      { name: "GCFC", value: "#ff4228" },
      { name: "GWS", value: "#ff8300" },
      { name: "HAW", value: "#682b13" },
      { name: "MELB", value: "#a41e34" },
      { name: "NMFC", value: "#002f87" },
      { name: "PORT", value: "#0099a8" },
      { name: "RICH", value: "#ffcc00" },
      { name: "STK", value: "#3c3c3c" },
      { name: "SYD", value: "#e31e30" },
      { name: "WCE", value: "#0d2240" },
      { name: "WB", value: "#003bb9" },
    ],
  },
  {
    title: "Smartline Colours",
    colours: [
      { name: "Reason Red", value: "#db4d3f" },
      { name: "Pale Yellow", value: "#f9ca5e" },
      { name: "Green", value: "#3cca5e" },
      { name: "Blue", value: "#056cc1" },
    ],
  },
  {
    title: "Atlassian",
    colours: [
      { name: "Green", value: "#36b37d" },
      { name: "Yellow", value: "#ffc400" },
      { name: "Orange", value: "#ff7453" },
      { name: "Purple", value: "#6453c0" },
      { name: "Petrol Blue", value: "#243857" },
    ],
  },
  {
    title: "Greens",
    colours: [
      { name: "Dark", value: "#1d6755" },
      { name: "Bright", value: "#11994c" },
      { name: "Medium", value: "#4ead77" },
      { name: "Pale", value: "#bad2c4" },
    ],
  },
  {
    title: "Visual Studio Code",
    colours: [
      { name: "Grey (light)", value: "#f3f3f3" },
      { name: "Grey (dark)", value: "#e5e5e5" },
      { name: "Blue (light)", value: "#007acc" },
      { name: "Blue (dark)", value: "#0065a9" },
      { name: "Black (light)", value: "#434343" },
      { name: "Black (dark)", value: "#222223" },
    ],
  },
  {
    title: "Miscellaneous",
    colours: [
      { name: "Light blue", value: "#D0E0F0" },
      { name: "Bright blue", value: "#347DE8" },
      { name: "Mid blue", value: "#9EDCFA" },
      { name: "Blue", value: "#387ADB" },
      { name: "Dark blue", value: "#7BC8F0" },
      { name: "Navy", value: "#133C53" },
      { name: "Forest green", value: "#234B38" },
      { name: "Dark green", value: "#43800B" },
      { name: "Green", value: "#77B255" },
      { name: "Moss green", value: "#8DB44A" },
      { name: "Light green", value: "#82B536" },
      { name: "Pale green", value: "#B3DE72" },
      { name: "Pale yellow", value: "#F9CA5E" },
      { name: "Yellow", value: "#F6C342" },
      { name: "Orange", value: "#FCA700" },
      { name: "Red", value: "#ED615A" },
    ],
  },
];

// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ("content" in document.createElement("template")) {
  const palettesContainer = document.querySelector(".app__palettes");
  const colourPaletteTpl = document.querySelector("#colour-palette-tpl");
  const colourPaletteItemTpl = document.querySelector(
    "#colour-palette-item-tpl"
  );

  data.forEach((palette) => {
    const colourPaletteTplClone = colourPaletteTpl.content.cloneNode(true);
    const colourPaletteList =
      colourPaletteTplClone.querySelector(".palette__list");

    colourPaletteTplClone.querySelector(".palette__title").textContent =
      palette.title;

    palette.colours.forEach((colour) => {
      const colourPaletteItemTplClone =
        colourPaletteItemTpl.content.cloneNode(true);

      const item = colourPaletteItemTplClone.querySelector(".palette__item");

      item.style.backgroundColor = colour.value;
      item.textContent = colour.name;

      colourPaletteList.appendChild(colourPaletteItemTplClone);
    });

    palettesContainer.appendChild(colourPaletteTplClone);
  });
} else {
  // Find another way to add the rows to the table because
  // the HTML template element is not supported.
}
