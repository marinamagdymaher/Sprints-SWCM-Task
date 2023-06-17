const fs = require("fs");
const moment = require("moment");
const file1 = "./problem2.json";

const data = JSON.parse(
  fs.readFileSync(file1, { encoding: "utf8", flag: "r" })
);

data.accidents.forEach((item) => {
  // console.log(item.date);
  const dateTime = moment(item.date, "MM-DD-YYYY").format("YYYY-MM-DD");
  console.log(dateTime);
  item.data = dateTime;
});

fs.writeFileSync("./output2.json", JSON.stringify(data), (err) => {
  if (err) return console.log(err);
});
