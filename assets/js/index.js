document.addEventListener("mousemove", event => {
    let style = `
    --move-x: ${(event.clientX-window.innerWidth)/2*0.005}deg;
    --move-y: ${(event.clientY-window.innerHeight)/2*0.01}deg;
    `
Object.assign(document.documentElement, {style:style})
})

