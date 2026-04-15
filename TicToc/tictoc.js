let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winpatterns = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
];        


const resetGame = () => {
         turnO = true;
         enableBoxes();
          msgcontainer.classList.add("hide");
}
 
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
      if(turnO){
          box.innerText = "O";
          turnO = false;
      } else {
          box.innerText = "X";
          turnO = true;
      }
      box.disabled = true;
      checkwinners();
    });
});

const disableBoxes = ()=>{   
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const Showwinner = (winner) => {
     alert(msg.innerText  = `congratulations, winner is ${winner}`);
    //   msgcontainer.classList.remove("hide");
      disableBoxes();
};

const checkwinners = () => {
    for(let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val){
               console.log("Winners", pos1val);
               Showwinner(pos1val);  
            }
        }
    }
} 


newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

// ************************************************
// *****************INTROPAGE**********************
// ************************************************

// Intro   game start oage render

function startGame(){
    document.getElementById("welcomeScreen").style.display="none";
}
  
function allowGame(){
    sessionStorage.setItem("tictoc_access","ok");
}

// Premium   game start oage render

function PremiumGame(){
    window.location.href = "../Premium/login.html";
}

