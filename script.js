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

console.log("The longest name of three names are both: " + tiedName);
console.log("The longest name of three names is: " + longestName);
