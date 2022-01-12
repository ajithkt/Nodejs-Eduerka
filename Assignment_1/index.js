var yargs = require("yargs");
var fs = require("fs");
const filenames_input = yargs(process.argv).argv._.slice(2).toString();
const input_filenames = filenames_input.split(",");
if (
  !fs.existsSync("filename1.txt") ||
  fs.readFileSync("filename1.txt").length === 0
) {
  fs.writeFileSync("filename1.txt", filenames_input);
  input_filenames.forEach((fileName) => {
    fs.writeFile(fileName, "You are awesome", function () {
      console.log("File created ", fileName);
    });
  });
} else {
  fs.readFile("filename1.txt", (err, data) => {
    let filenames_already_exist = data.toString().split(",");
    let intersection = filenames_already_exist.filter((element) =>
      input_filenames.includes(element)
    );
    if (intersection.length == 0) {
      new_filenames = filenames_already_exist.concat(
        filenames_input.split(",")
      );
      fs.writeFileSync("filename1.txt", new_filenames.toString());
      input_filenames.forEach((fileName) => {
        fs.writeFile(fileName, "You are awesome", () =>
          console.log("File created", fileName)
        );
      });
    } else {
      console.log("File already exsist", intersection);
    }
  });
}
