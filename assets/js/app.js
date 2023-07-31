

i=0;
function game(){

    let math = Math.floor(Math.random() * 100) + 1;
    let num = +numInput.value;
    
    t.innerHTML = i;

    if (i < 10){
        i++;
        if (num < math)
            b = ('загаданое число больше');
        else if (num > math)
            b = ('загаданое число меньше');
        else
            b = ('вы правы поздравляю');

    }

    console.log(num);
}