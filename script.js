let name1 = "Meghan Markle";
let name2 = "Rihanna Fenty";
let name3 = "Eric Bishop";

let longestName = "";
let tiedName = [];

if (name1.length > longestName.length) {
  longestName = name1;
  tiedName = [name1];
} else if (name1.length === longestName.length) {
  tiedName.push(name1);
}

if (name2.length > longestName.length) {
  longestName = name2;
  tiedName = [name2];
} else if (name2.length === longestName.length) {
  tiedName.push(name2);
}

if (name3.length > longestName.length) {
  longestName = name3;
  tiedName = [name3];
} else if (name3.length === longestName.length) {
  tiedName.push(name3);
}

if (tiedNames.length === 0) {
  console.log("The longest of the three names" + longestName);
} else if (tiedNames.length === 1) {
  console.log("The longest of the three names" + longestName);
} else if (tiedNames.length === 2) {
  console.log("The longest of the three names" + longestName);
}
