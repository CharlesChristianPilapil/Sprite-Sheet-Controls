const canvas = document.querySelector('.myCanvas');
const ctx = canvas.getContext('2d');
const canvasWidth = canvas.width = 788;
const canvasHeight = canvas.height = 625;

const spriteWidth = 540 / 4, spriteHeight = 135;

let gameFrame = 1;
let stagger = 0;
let staggerFrame = 10;

let FrameCount = 10;

const myImage = document.querySelector('.myImage');

let outerIndex = 0;

const animationStates = [4, 4, 5, 6, 2, 9, 2, 3, 10];

let x = -50;
let y = 85;

const animate = () => {

    if((stagger % staggerFrame) == 0) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        let frameX = spriteWidth * (gameFrame % FrameCount);

        if(outerIndex == 4 || outerIndex == 6) {
            y-=40;

        setTimeout(() => {
            y+=40;
        }, 200);
        }

        else {
            y = 85;
        }

        ctx.drawImage(myImage, frameX, 0, spriteWidth, spriteHeight, x, y, canvasWidth, canvasHeight);
        gameFrame++;
    }
    stagger++;

    requestAnimationFrame(animate);
}

animate();

const toggle = document.querySelectorAll('.toggle');

toggle.forEach((el, index) => {
    el.addEventListener('click', () => {

        toggle.forEach(e => e.classList.remove('active'));
        toggle[index].classList.add('active');


        myImage.src=`${toggle[index].ariaLabel}.png`;
        gameFrame = 0;
        outerIndex = index;
        FrameCount = animationStates[index];
    });
});