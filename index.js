// Runs the application using imports from lib/ and npm
const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs").promises;
const { Circle, Square, Triangle } = require("./lib/shapes");
// Max Length Input (npm installed it)
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxLen-input", MaxLengthInputPrompt);

// Add prompts
function promptUser() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "shape",
        message: "Select a Shape",
        choices: ["Circle", "Square", "Triangle"],
      },
      {
        type: "input",
        name: "shapeCol",
        message: "Enter a color keyword for your shape (OR a hexadecimal number)",
      },
      {
        type: "maxLen-input",
        name: "text",
        message: "Enter up to 3 Characters",
        maxLength: "3",
      },
      {
        type: "input",
        name: "textCol",
        message: "Enter a color keyword for your text (OR a hexadecimal number)",
      },
    ])
    .then(({ shape, shapeCol, text, textCol }) => {
      if (shape === "Circle") {
        const newCir = new Circle(shape, shapeCol, text, textCol);
        return newCir;
      } else if (shape === "Square") {
        const newSqu = new Square(shape, shapeCol, text, textCol);
        return newSqu;
      } else if (shape === "Triangle") {
        const newTri = new Triangle(shape, shapeCol, text, textCol);
        return newTri;
      }
    })
    .then((newLogo) => {
      writeFile(join(__dirname, "/examples", `${newLogo.shape}.svg`), newLogo.createLogo());
    })
    .then(() => console.log(`SVG File Created!`))
    .catch((err) => {
      console.log(err);
      console.log("Something went wrong!");
    });
}

// Run prompts
promptUser();