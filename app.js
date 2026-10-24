let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#message");
let turnO = true; // playerX, playerO
let count = 0; //the number of moves
 const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 ];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
 boxes.forEach((box) => {
    box.addEventListener( "click", () => {
        if(turnO){ //playerO turn
            box.innerText = "O";
            turnO = false; //matlab playerX ki turn aagayee
        }
        else{
             box.innerText = "X";//playerX ki turn hai
             turnO = true;//playerO ki turn aa gayii
        }
        box.disabled = true ; //matlab ham ek box me ek value daal paayenge usse jada nahi daal payenge aur ek value daalne ke baad hamra box disable hojaayega
        count++;      
        checkWinner(); 
    });
 });
const disableBoxes = () =>{
    for(let box of boxes){
       box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
       box.disabled = false;
       box.innerText = "";
    }
};


const showWinner = (Winner) => {
    msg.innerText=`Congratulations , Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


 const checkWinner = () =>{
    for( let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return;
            }
        }
    }
    if (count === 9) {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}
 };
 newGameBtn.addEventListener("click", resetGame);
 resetBtn.addEventListener("click",resetGame);
 