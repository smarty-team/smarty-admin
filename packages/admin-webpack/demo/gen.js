const fs = require("fs");
let code = "";
Array(2000)
  .fill()
  .map((v, i) => {
    // console.log(v, i);
    code += `const bg${i} = require("./assets/bg.png?${i}");\n`;
  });

fs.writeFileSync("./src/index.js", code);
