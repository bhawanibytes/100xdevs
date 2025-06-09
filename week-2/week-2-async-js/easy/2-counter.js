// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


counter = 0
time = 1000
function noUse() {
    console.clear()
    console.log(counter);
    counter++
    return setTimeout( noUse, time);       
}
setTimeout(noUse, time);



































































// (Hint: setTimeout)