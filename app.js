let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-Btn");
let newMsg=document.querySelector("#msg");
let messageContainer=document.querySelector(".msg-container");

let turn0=true;

const winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,4,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{

    turn0=true;
    enableBoxes();
    messageContainer.classList.add("hide");
};

const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
        
     } );

});
const showWinner=(winner)=>{
    newMsg.innerText=`Congratulations, Winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();

}


const checkWinner= () => {
    for(let pattern of winningPatterns)
    {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
    
    if(pos1Val!="" && pos2Val!="" && pos3Val!="")
    {
        if(pos1Val===pos2Val && pos2Val===pos3Val)
        {
            console.log("Winner",pos1Val);
            showWinner(pos1Val);
        }
    }
}
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);