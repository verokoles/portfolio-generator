const fs = require('fs');
// const { resolve } = require('path');
//write files
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if no error, reject the promise and send it to the catch() method
            if (err) {
                reject(err);
                //return out of function here to make sure the promise doesnt accidentally execute the resolve() function as well
                return;
            }
            //if all went well resolve the promise and send the successful data to .then() method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};
//copying file
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if no error, reject the promise and send it to the catch() method
            if (err) {
                reject(err);
                return;
            }
            //if all went well resolve the promise and send the successful data to .then() method
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
};
    module.exports = { writeFile, copyFile };
