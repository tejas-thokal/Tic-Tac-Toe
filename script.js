let boxes=document.querySelectorAll(".box");
let btn=document.querySelector(".reset");
let h=document.querySelector(".winner");
let turnO=true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const showwinner=(winner)=>{
    h.innerText=`winner is ${winner}`;
    disabledboxes();
    h.classList.remove("hide");
    h.classList.add("winner");
}

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const reset=()=>{
    turnO=true;
    enabledboxes();
    h.setAttribute("class","hide");
}

btn.addEventListener("click",(reset));

const checkWinner=()=>{
    for(let pattern of winpattern){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1 !="" && posval2 !="" && posval3 !=""){
            if(posval1===posval2 && posval2===posval3){
                showwinner(posval1);

            }
        }

    }
};