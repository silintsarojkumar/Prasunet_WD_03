let boxes =document.querySelectorAll("#box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgCont = document.querySelector(".message")
let msg = document.querySelector("#msg")

let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]

];





boxes.forEach((box)=> { 
    box.addEventListener("click",()=>{
        console.log("clicked")
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
        
    })
});
const resetGame =  () => {

    turnO = true;
    ensableBtn();
    msgCont.classList.add("message")
}

const showWinner = (winner) =>{
    msg.innerText = `Winner is ${winner}`
    msgCont.classList.remove("message")

}
const disableBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const ensableBtn = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}

const checkWinner = () => {
    for (let pattern of winPatterns){

            let pos1val =boxes[pattern[0]].innerText;
            let pos2val =boxes[pattern[1]].innerText;
            let pos3val =boxes[pattern[2]].innerText;
            if(pos1val !="" && pos2val != ""&& pos3val !="" ){
            if(pos1val===pos2val&& pos2val===pos3val){
            showWinner(pos1val);
            disableBtn();
        }
        
    } 


    };
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
