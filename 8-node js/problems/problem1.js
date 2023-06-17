// Read the JSON in problem1.json
const fs = require("fs");
const file1 = "./problem1.json";
const data = JSON.parse(
  fs.readFileSync(file1, { encoding: "utf8", flag: "r" })
);
console.log(data.name);
data.name = "Fluffyy";
data.weight = 5;
data.height = 10;
// console.log(data);

// Add height and weight to Fluffy
// Fluffy name is spelled wrongly. Update it to Fluffyy

fs.writeFile(file1, JSON.stringify(data), function writeJSON(err) {
  if (err) return console.log(err);
});

// List all the activities of Fluffyy’s catFriends.
for (let i = 0; i < data.catFriends.length; i++) {
  data.catFriends[i].activities.forEach((item) => {
    console.log(item);
  });
}

// Print the catFriends names.
data.catFriends.forEach((item) => {
  console.log(`${item.name}`);
});
// Print the total weight of catFriends
const totalWeight = data.catFriends.reduce((acc, current) => {
  return acc + current.weight;
}, 0);
console.log("totalWeight" + ":" + totalWeight);

// Print the total activities of all cats (op:6)
console.log("Total activities of all cats:");
data.activities.forEach((item) => {
  console.log(item);
});
for (let i = 0; i < data.catFriends.length; i++) {
  data.catFriends[i].activities.forEach((item) => {
    console.log(item);
  });
}


// Add 2 more activities to Bar & Foo cats
for (let i = 0; i < data.catFriends.length; i++) {
  data.catFriends[i].activities.push("ooooo", "iukjkj");
}
// Update the fur color of bar
data.catFriends[0].furcolor = "brown";
console.log(data);
