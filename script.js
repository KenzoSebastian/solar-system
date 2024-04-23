const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight - 4.01
canvas.width = window.innerWidth - 1.5

const ctx = canvas.getContext("2d")


const planets = []


class Object {
    #centerX = canvas.width / 2
    #centerY = canvas.height / 2

    constructor(nama, jarak, radius, warna, speed) {
        this.nama = nama
        this.jarak = jarak
        this.radius = radius
        this.warna = warna
        this.speed = speed
        this.angle = 0
    }

    drawObject() {
        let x = this.#centerX + this.jarak * Math.cos(this.angle)
        let y = this.#centerY + this.jarak * Math.sin(this.angle)
        this.angle += this.speed
        ctx.beginPath() 
        ctx.arc(x, y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.warna
        ctx.fill()
        ctx.stroke()
    }

    drawOrbit() {
        ctx.beginPath()
        ctx.arc(this.#centerX, this.#centerY, this.jarak, 0, Math.PI * 2)
        ctx.strokeStyle = "grey"
        ctx.stroke()
    }
}

const matahari = new Object("matahari", 0, 50, "yellow", 0)
planets.push(new Object("Merkurius", 60, 5, "rgb(128, 128, 128)", 0.05));
planets.push(new Object("Venus", 90, 8, "rgb(255, 165, 0)", 0.04));
planets.push(new Object("Bumi", 120, 10, "rgb(0, 0, 255)", 0.03));
planets.push(new Object("Mars", 160, 8, "rgb(255, 0, 0)", 0.02));
planets.push(new Object("Jupiter", 210, 20, "rgb(165, 42, 42)", 0.015));
planets.push(new Object("Saturnus", 260, 18, "rgb(218, 165, 32)", 0.012));
planets.push(new Object("Uranus", 310, 15, "rgb(173, 216, 230)", 0.01));
planets.push(new Object("Neptunus", 360, 14, "rgb(0, 0, 128)", 0.009));



function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    matahari.drawObject()
    planets.forEach((planet) => {
        planet.drawOrbit()
        planet.drawObject()
    })

    requestAnimationFrame(animate)
}

animate()