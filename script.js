let name1 = "Meghan Markle";
let name2 = "Rihanna Fenty";
let name3 = "Eric Bishop!!";

let longestName = "";
let tiedName = [name1, name2, name3];

console.log(tiedName);

if (name1.length > longestName.length) {
  longestName = name1;
  // tiedName = [name1];
} else if (name1.length === longestName.length) {
  tiedName.push(name1);
}

if (name2.length > longestName.length) {
  longestName = name2;
  // tiedName = [name2];
} else if (name2.length === longestName.length) {
  tiedName.push(name2);
}

if (name3.length > longestName.length) {
  longestName = name3;
  //   tiedName = [name3];
} else if (name3.length === longestName.length) {
  tiedName.push(name3);
}

console.log("The longest of the three names: " + longestName);

let eqOne = name1 + name2;
let eqTwo = name2 + name3;
let eqThree = name1 + name3;
let allThree = name1 + name2 + name3;

if (
  name1.length === longestName.length &&
  name2.length === longestName.length
) {
  console.log(
    "The longest of the three name is " + longestName + " and " + tiedName[1]
  );
} else if (
  name2.length === longestName.length &&
  name3.length === longestName.length
) {
  console.log(
    "The longest of the three name is " + longestName + " and " + tiedName[3]
  );
} else if (
  name1.length === longestName.length &&
  name3.length === longestName.length
) {
  console.log(
    "The longest of the three name is " + longestName + " and " + tiedName[3]
  );
} else {
  name1.length === longestName.length &&
    name2.length === longestName.length &&
    name3.length === longestName.length;
}
{
  console.log(
    tiedName[1] +
      ", " +
      tiedName[2] +
      ", and " +
      tiedName[3] +
      " are the same length"
  );
}
