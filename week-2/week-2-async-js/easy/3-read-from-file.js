// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('fs') 
console.log('data1');
async function readFile() {
    fs.readFile('a.txt', 'utf-8', (err, data) => {
        console.log('data2');
        console.log(data);
        console.log('data3');
        console.log(err);
        console.log('data4'); 
    } )
    console.log('data5');
}
readFile()

