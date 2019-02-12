var div1 = document.querySelector('.item-1 span');
var div2 = document.querySelector('.item-2 span');
var but1 = document.querySelector('.but1');
var but2 = document.querySelector('.but2');

function Timer(elem, time, int) {
    this.elem = elem;
    this.time = time;
    this.int = int;
    this.elem.innerHTML = this.time;
    var timer = this;

    this.tick = function () {
        timer.time--;
        timer.elem.innerHTML = timer.time;
        if (timer.time <= 0) {
            timer.stop();
        }
    }
    this.run = function () {
        int = setInterval(timer.tick, timer.int);
    }
    this.stop = function () {
        clearInterval(int);
    }
}
var timer1 = new Timer(div1, 800, 1000);
var timer2 = new Timer(div2, 200, 10);

but1.addEventListener('click', function () {
    if (but1.innerHTML == "Остановить таймер") {
        timer1.stop();
        but1.innerHTML = "Запустить таймер";
    }
    else if(but1.innerHTML == "Запустить таймер") {
        timer1.run();
        but1.innerHTML = "Остановить таймер";
    }
})

but2.addEventListener('click', function () {
    if (but2.innerHTML == "Остановить таймер") {
        timer2.stop();
        but2.innerHTML = "Запустить таймер";
    }
    else if(but2.innerHTML == "Запустить таймер") {
        timer2.run();
        but2.innerHTML = "Остановить таймер";
    }
})
console.log(but1);
console.log(but2);
console.log(timer1);
console.log(timer2);