export function sortIngridients(data) {
  const bun = [];
  const sauce = [];
  const main = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === "bun") {
      bun.push(data[i]);
    } else if (data[i].type === "sauce") {
      sauce.push(data[i]);
    } else if (data[i].type === "main") {
      main.push(data[i]);
    }
  }
  const newData = {
    bun: bun,
    sauce: sauce,
    main: main
  }
  return newData;
}
