const display=document.getElementById("display");
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;

function start(){
    if (!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning=true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
        isRunning=false;
    }

}

function reset(){
        clearInterval(timer);
        startTime = 0;
        elapsedTime = 0;
        isRunning = false; 
        display.textContent = "00:00:00:00";
}
function startstop(){
        if (isRunning){
            stop();
        }
        else{
            start();
        }
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60 ));
    let minutes = Math.floor(elapsedTime / (1000*60) % 60 );
    let seconds = Math.floor(elapsedTime / 1000 % 60 );
    let miliseconds = Math.floor(elapsedTime % 1000/10);

    hours=String(hours).padStart(2, "0");
    minutes=String(minutes).padStart(2, "0");
    seconds=String(seconds).padStart(2, "0");
    miliseconds=String(miliseconds).padStart(2, "0");


    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}

// Zgjedh tekstin
const text = document.getElementById('text');

// Ndrysho tekstin në një listë të shkronjave
const letters = text.textContent.split('');

// Pastro tekst
text.textContent = '';

// Për secilën shkronjë në tekst
letters.forEach(letter => {
    // Krijo një element span për shkronjën
    const span = document.createElement('span');
    span.textContent = letter;
    // Vendos një klasë për shkronjat për të pasur mundësinë e identifikimit
    span.classList.add('letter');
    // Shto shkronjën në tekstin
    text.appendChild(span);
});

// Funksioni për të ndryshuar ngjyrën e shkronjave automatikisht
function changeColors() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach(letter => {
        letter.style.color = getRandomColor();
    });
}

// Funksioni që gjeneron një ngjyrë të rastit
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Ndrysho ngjyrat e shkronjave çdo 500ms (0.5 sekonda)
setInterval(changeColors, 500);
