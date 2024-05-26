const increment = document.getElementById('add');
const decrement = document.getElementById('remove');
const output = document.getElementById('data');
const sound = document.getElementById('sound');
const no1 = document.getElementById('no1');
const no2 = document.getElementById('no2');
const alrt = document.getElementById('alrt');
let count = 0;

increment.onclick = () => {   
    count++;
    if(count <=10 ){
        output.innerHTML = count;
        alrt.innerHTML = '';
    }else{
        no1.play();
        count = 10;
        alrt.innerHTML = "Don't press more, stop here!!";
        alrt.style.color = 'blue';
    } 
};

decrement.onclick = () => { 
    count--;
    if(count >=0 ){
        output.innerHTML = count;
        alrt.innerHTML = '';
    }else{
        no2.play();
        count = 0;
        alrt.innerHTML = "Don't press more!!!!";
        alrt.style.color = 'red';
    }   
};

// sound.onclick = ()=>{
//     no1.play();
// }
