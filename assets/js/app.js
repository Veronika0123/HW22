
    let math = Math.floor(Math.random() * 100) + 1;
    console.log(` ${math} `);
    i=0;
    

    

    function game(){

        let button1 = document.getElementById('elem');

        let num = +numInput.value;
        console.log(` ${num} `);
        
        t.innerHTML = 10 - i;

        if (i < 10){
            i++;
            if (num < math)
                b = 'а загаданое число больше';
            else if (num > math)
                b = 'а загаданое число меньше';
            else {
                b = 'вы правы, поздравляю!!!';
                button1.disabled = true;
                button1.style = "background-color: gray;";
            }
        }
        else  {
            button1.disabled = true;
            m.innerHTML = 'Правельный ответ: ' + math;
            button1.style = "background-color: gray;";
        }

        
        g.innerHTML = num + ' ' + b;
    }