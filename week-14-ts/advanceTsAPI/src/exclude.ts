type MyCustomEvent = 'click' | 'scroll' | 'mousemove'
type ExcludeEvent = Exclude< MyCustomEvent, 'scroll' >

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event : ${event}`)
}

handleEvent('click')