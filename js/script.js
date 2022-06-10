const mario  = document.querySelector('.mario');
const pipe   = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {

    mario.classList.add('jump');
    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const marioPosition  = +window.getComputedStyle(mario).bottom.replace('px', '');
    const pipePosition   = pipe.offsetLeft; 
    const cloudsPosition = clouds.offsetLeft; 
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        document.getElementById('txtRestart').style.display = 'block';
        document.getElementById('txtRestart').focus();

        clearInterval(loop);
    }

}, 10);

document.body.addEventListener('keypress', () =>{
    var x = event.keyCode;
    if(x == '0032')
    {
        jump();
    }
});
