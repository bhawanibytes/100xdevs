function delayedCall (fn: ()=>void):void{
    setTimeout(fn, 1000)
}

delayedCall(()=> console.log("hello there"))