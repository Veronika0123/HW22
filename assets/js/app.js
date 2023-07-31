
    let math = Math.floor(Math.random() * 100) + 1;
    i=0;

    function game(){

        let num = +numInput.value;
        
        t.innerHTML = 10 - i;

        if (i < 10){
            i++;
            if (num < math)
                b = 'а загаданое число больше';
            else if (num > math)
                b = 'а загаданое число меньше';
            else
                b = 'вы правы поздравляю';

        }

        g.innerHTML = num + ' ' + b;
    }