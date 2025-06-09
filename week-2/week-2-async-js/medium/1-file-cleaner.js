// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

// async function readFile() {
//     fs.readFile('a.txt', 'utf-8', (err, data) => {
//         console.log("This is read data:" + data);
//         let cleanedStr = data.replace(/\s+/g, ' ').trim()
//         log
//         fs
//     })
// }
// readFile()
// let content = data

const fs = require('fs')

async function readFile() {
    fs.readFile('a.txt', 'utf-8', (err, data) => {
        console.log("This is read data:" + data);
        let cleanedStr = data.replace(/\s+/g, ' ').trim()
        console.log('This is cleaned data:' + cleanedStr);     
        fs.writeFile('a.txt', cleanedStr, () => {
                console.log('data is written to file:');
        })
    })
}
readFile()