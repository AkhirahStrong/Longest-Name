let name1 = "Meghan Markle";
let name2 = "Rihanna Fenty";
let name3 = "Eric Bishop";

let longestName = "";
let tiedName = "";

if (name1.length > longestName.length) {
  longestName = name1;
} else if (name2.length > longestName.length) {
  longestName = name2;
} else if (name3.length > longestName.length) {
  longestName = name3;
} else if (longestName == name1 && longestName == name2) {
  (tiedName = name1), name2;
}

console.log("The longest name of three names are both: " + tiedName);
console.log("The longest name of three names is: " + longestName);
