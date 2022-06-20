const mario      = document.querySelector('.mario');
const pipe       = document.querySelector('.pipe');
const clouds     = document.querySelector('.clouds');
const audio      = document.getElementById('hdfAudio');
const audio_g_o  = document.getElementById('hdfAudioGameOver');
const placar     = document.getElementById('txtPlacar');

var contador     = 0;
var pontos       = 0;

document.getElementById('txtStart').focus();

pipe.style.animationPlayState   = 'paused';
clouds.style.animationPlayState = 'paused';
mario.style.display             = 'none';

const jump = () => {

    mario.classList.add('jump');
    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const jumpKill = () => {

    mario.classList.add('jump-kill');
    setTimeout(() => {

        mario.style.bottom = '-360px';

    }, 1000); 
}

const loop = setInterval(() => {

    const marioPosition  = +window.getComputedStyle(mario).bottom.replace('px', '');
    const pipePosition   = pipe.offsetLeft; 
    const cloudsPosition = clouds.offsetLeft; 
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        //mario.style.bottom = `${marioPosition}px`;
        
        pipe.style.animationPlayState = 'paused';
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animationPlayState = 'paused';
        clouds.style.left = `${cloudsPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        jumpKill();
        audio.pause();
        audio_g_o.play();
        document.getElementById('txtRestart').style.display = 'block';
        document.getElementById('txtRestart').focus();

        clearInterval(loop);
        stop_placar();
    }

}, 10);

function start ()
{
    document.getElementById('txtStart').style.display = 'none';
    pipe.style.animationPlayState   = 'running';
    clouds.style.animationPlayState = 'running';
    mario.style.display             = 'block';

    audio.play();

    document.body.addEventListener('keypress', () =>{
        var x = event.keyCode;
        if(x == '0032')
        {
            jump();
        }
    });

    play_placar();
}

function  play_placar() 
{
     pontos = setInterval(() => {
        contador++;
        placar.innerHTML = contador;
    
    }, 10);
}

function stop_placar() 
{
    clearInterval(pontos);
}

