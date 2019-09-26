/*
let _hello = 3;
let $money = 10;
let myBirthDay = "04 dez";

const pi = 3.14;
*/
/* old command
const score1 = document.getElementById();
const score2 = document.getElementsByClassName();
const score3 = document.getElementsByName();
const score4 = document.getElementsByTagName();
const score5 = document.getElementsByTagNameNS();
*/

// new command
//const score6 = document.querySelectorAll();


const score = document.querySelector('.score'),   // '#by_ID' 'tag' '.class'
        start = document.querySelector('.start'),
        gameArea = document.querySelector('.gameArea'),
        car = document.createElement('div');

car.classList.add('car');


const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};

const setting = {
    start : false,
    score : 0,
    speed : 3,
    traffic : 3
};

function getQuantityElements (heightElement){
    return  document.documentElement.clientHeight / heightElement +1;
}
console.log(getQuantityElements(100));

console.log(start);
console.log(score);
console.log(gameArea);

console.dir(score);

/* ald command
start.onclick = function () {
    start.classList.add('hide')
};
*/

function startGame() {
    start.classList.add('hide');

    for (let i = 0; i < getQuantityElements(100); i++){
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.top = (i*100) + 'px';
        line.y = i*100;
        gameArea.appendChild(line);
    }

    for (let i = 0; i < getQuantityElements(100*setting.traffic); i++) {
        const enemy = document.createElement('div');
        enemy.classList.add('enemy');
        enemy.y = -100 * setting.traffic * (i+1);
        enemy.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';
        enemy.style.top = enemy.y + 'px';
        enemy.style.background = "transparent url(./image/enemy2.png) center / cover no-repeat";
        gameArea.appendChild(enemy);


    }
    setting.start = true;
    gameArea.appendChild(car);
    setting.x = car.offsetLeft;
    setting.y = car.offsetTop;
    requestAnimationFrame(playGame);
};

start.addEventListener('click', startGame);

//  if (setting.start === true) равен  if (setting.start)
//setting.x = setting.x - setting.speed;    setting.x = setting.x + setting.speed;
function moveRoad() {
    let lines = document.querySelectorAll('.line');
    lines.forEach(function (itemLine) {
        console.log(itemLine);
        itemLine.y += setting.speed;
        itemLine.style.top = itemLine.y + 'px';

        if (itemLine.y >=document.documentElement.clientHeight){
            itemLine.y = -100;
        }
    })
}

function moveEnemy() {
    let enemy = document.querySelectorAll('.enemy')
        enemy.forEach(function (itemEnemy) {
            itemEnemy.y += setting.speed / 2;
            itemEnemy.style.top = itemEnemy.y + 'px';

            if (itemEnemy.y >= document.documentElement.clientHeight){
                itemEnemy.y = -100 * setting.traffic;
                itemEnemy.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';
            }
        })


}


// && "И" "i"
function playGame() {
    console.log('play Game');
    if (setting.start){
        moveRoad();
        moveEnemy();
        if (keys.ArrowLeft === true && setting.x > 0){
            setting.x -= setting.speed;
        }
        if (keys.ArrowRight === true && setting.x < (gameArea.offsetWidth - car.offsetWidth)){
            setting.x += setting.speed;
        }
        if (keys.ArrowUp === true && setting.y > 0){
            setting.y -= setting.speed;
        }
        if (keys.ArrowDown === true && setting.y < (gameArea.offsetHeight - car.offsetHeight)){
            setting.y += setting.speed;
        }

        car.style.left = setting.x + 'px';
        car.style.top = setting.y + 'px';


        requestAnimationFrame(playGame);
    }
}

function startRun(event) {
    event.preventDefault();
    // console.log(event.key);
    keys[event.key]= true;
}

document.addEventListener('keydown', startRun);

function stopRun(event) {
    event.preventDefault()
   // console.log(event.key)
    keys[event.key]= false;
}

document.addEventListener('keyup', stopRun);
