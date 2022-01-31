// Dependancies to manage files (FS)
const fs = require('fs') 

// Writing File - function re-used from portfolio generator
const writeFile = fileContent => {
  return new Promise ((resolve, reject) => {
    console.log('working')
    console.log(fileContent)
    // create a file with the HTML content created from template.js
    fs.writeFile('./dist/TeamProfile.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File Created!'
      });
    });
  });
};

// Copying File - function re-used from portfolio generator
const copyFile = () => {
  return new Promise((resolve, reject) => {
    // Copy file from first location to second location
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'Stylesheet created!'
      });
    });
  });
};

// Export functions to write and copy files
module.exports = {
  writeFile,
  copyFile
}