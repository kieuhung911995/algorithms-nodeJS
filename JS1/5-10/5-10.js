/**
 * Đầu vào: một file template, và các params, nội dung file và tên các param không cố định
   Đầu ra: một file mới với nội dung là template và các params được truyền vào.
 * @param {string} link
 * @param {object} param
 * @returns new file with template contain params
 */
const showDataFile = (link, param) => {
  const fs = require("fs");
  if (link.includes(".txt")) {
    try {
      const data = fs.readFileSync(link, { encoding: "utf8", flag: "r" });
      let replace = data.replace("{{name}}", param.name);
      fs.appendFileSync("result.txt", "");
      fs.writeFileSync("./result.txt", replace);
      const newData = fs.readFileSync("./result.txt", {
        encoding: "utf8",
        flag: "r",
      });
      return newData;
    } catch (err) {
      console.error(err);
    }
  }
  if (link.includes(".html")) {
    try {
      const data = fs.readFileSync(link, { encoding: "utf8", flag: "r" });
      let replaceObj = {
        "{{title}}": param.title,
        "{{pageTitle}}": param.pageTitle,
        "{{content}}": param.content,
      };
      let replace = data.replace(
        /{{title}}|{{pageTitle}}|{{content}}/gi,
        function (matched) {
          return replaceObj[matched];
        }
      );
      fs.appendFileSync("result.html", "");
      fs.writeFileSync("./result.html", replace);
      const newData = fs.readFileSync("./result.html", {
        encoding: "utf8",
        flag: "r",
      });
      return newData;
    } catch (err) {
      console.error(err);
    }
  }
};
module.exports = showDataFile;
let result = showDataFile("./template.txt", {
  name: "Jonny",
});
console.log(result);
