let canvas = document.getElementById('rain')
console.log(canvas);

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let ctx = canvas.getContext('2d')
function Random(min, max) {
    return Math.floor(Math.random()*(max-min)+min)
}
console.log(Random(3,5))

let rainAudio = document.querySelector('#rainaudio')
let birdsAudio = document.querySelector('#birdsaudio')
let leavesAudio = document.querySelector('#leavesaudio')
rainAudio.volume = 0.5
birdsAudio.volume = 0.5
leavesAudio.volume = 0.5
// координаты x, y
// скорость speed
// координата endy
// Прозрачность opacity

function Raindrop(x,y, speed,endy, opacity) {
    this.x = x
    this.y = y
    this.speed = speed
    this.endy = endy
    this.opacity = opacity

    this.draw = () => {
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x, this.y - this.endy)
        ctx.lineWidth = 1
        ctx.strokeStyle = `rgba(255, 255, 255, 1)`
        ctx.stroke() 
    }
    
    this.update = () => {
        let rainend = window.innerHeight
        if (this.y > rainend) {
            this.y = this.endy;
        }
        else {
            this.y = this.y + this.speed
        }
        this.draw()
    }
}




let drop = new Raindrop(600, 400, 4, 100, 1)
drop.draw()
let drop2 = new Raindrop(500, 300, 1, 150, 1)
drop2.draw()


let raindrops = [];
for (let i = 0; i< 100; i++) {
    let x =Random(0,window.innerWidth);
    let y = Random(0,window.innerHeight);
    let speed = Random(1, 10);
    let length = Random(1, 15);
    let opacity = Math.random()*0.5;
    raindrops.push(new Raindrop(x,y,speed,length,opacity))
}

let animation = null
let isStart = true

function animateRain() {
    animation = requestAnimationFrame(animateRain)
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight)
    for (let i = 0; i < raindrops.length; i++) {
    raindrops[i].update();
    }
    
}
animateRain()
rainAudio.play()
let btnRain = document.querySelector('#rainbutton')
console.log(btnRain);

btnRain.addEventListener('click', () => {
    console.log(isStart);
    if (isStart==true) {
        cancelAnimationFrame(animation)
        isStart=false
        ctx.clearRect(0,0,window.innerWidth, window.innerHeight)
        rainAudio.pause()
        birdsAudio.play()
        leavesAudio.pause()
    }
    else {
        animateRain()
        isStart = true
        rainAudio.play()
        birdsAudio.pause()
        leavesAudio.pause()
    }
})
// 1. найти музыку для леса zvukipro.com
// 2. добавить музыку в отдельную папку
// 3. добавить audio.js и подключить его в html





