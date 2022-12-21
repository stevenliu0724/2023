const canvas = document.getElementById("CVS");
const c = canvas.getContext("2d");
const particleArray = [];
let hcolor = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("rezie", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: undefined,
    y: undefined,
};

canvas.addEventListener ("click", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 50; i++){
        particleArray.push(new Particle());
    };
});

canvas.addEventListener ("mousemove", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for (i =0; i < 5; i++){
        particleArray.push(new Particle());
    };
});

//For screen
canvas.addEventListener ("touchmove", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for (i =0; i < 5; i++){
        particleArray.push(new Particle());
    };
});


class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 + 1;
        this.speedx = Math.random() * 3 - 1.5;
        this.speedy = Math.random() * 3 - 1.5;
        this.color = "hsl(" + hcolor + ", 100%, 50%)";
    };
    
    update(){
        this.x += this.speedx;
        this.y += this.speedy;
        if (this.size > 0.2) this.size -= 0.1;
    };

    draw(){
        c.beginPath();
        c.fillStyle =this.color;
        c.arc(this.x, this.y, this.size, 0, Math.PI *2, false);
        c.fill();
    };

};

function init(){
    for (let i = 0; i < 100; i++){
        particleArray.push(new Particle());
    };
};
init();

function handleparticle(){
    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
        if (particleArray[i].size <= 0.3){
            particleArray.splice(i, 1);
            i--;
        };
    };
};

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    //c.fillStyle = "rgba(0, 0, 0, 0.05";
    //c.fillRect(0, 0, canvas.width, canvas.height);
    handleparticle();
    hcolor+=5;
    requestAnimationFrame(animate);
    c.font = "30px Arial";
    c.textAlign = "center";
    c.fillText("Happy 2023!", canvas.width / 2, canvas.height / 2);
    c.drawImage(image, canvas.width * 0.3, canvas.height* 0.3);
};

animate();