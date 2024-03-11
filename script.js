let value="X";
Ar=new Array(9).fill(null);
console.log(Ar);
let result=document.querySelector("#result");
let container=document.querySelector(".container");
function checkWinner() {
    if (
        (Ar[0]!=null && Ar[0] == Ar[1] && Ar[1] == Ar[2]) ||
        (Ar[3]!=null && Ar[3] == Ar[4] && Ar[4] == Ar[5]) ||
        (Ar[6]!=null && Ar[6] == Ar[7] && Ar[7] == Ar[8]) ||
        (Ar[0]!=null && Ar[0] == Ar[3] && Ar[3] == Ar[6]) ||
        (Ar[1]!=null && Ar[1] == Ar[4] && Ar[4] == Ar[7]) ||
        (Ar[2]!=null && Ar[2] == Ar[5] && Ar[5] == Ar[8]) ||
        (Ar[0]!=null && Ar[0] == Ar[4] && Ar[4] == Ar[8]) ||
        (Ar[2]!=null && Ar[2] == Ar[4] && Ar[4] == Ar[6])
    ){
        result.innerHTML=`<h1>${value} Wins!</h1>`;
        container.style.display="none";
    }
    else if(Ar.indexOf(null)==-1){
        result.innerHTML=`<h1>"It's a draw"</h1>`;
        container.style.display="none";
    }
}

function handleClick(e){
    console.log(e);
    let id=Number(e.id);
    if(!e.innerText){
    if (value=="X"){
        e.innerText=value;
        Ar[id]=value;
        checkWinner();
        value="O";
        console.log(Ar)
    }
    else{
        e.innerText=value;
        Ar[id]=value;    
        // Ar[e.id].push(value);
        checkWinner();
        value="X"
        console.log(Ar)
    }
}
}