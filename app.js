let userScore=0;
let compScore=0;

const game=document.querySelectorAll(".game");
const msg=document.querySelector("#winnerMsg");
const userscoretext=document.querySelector("#yourscore");
const compscoretext=document.querySelector("#compscore");

const getcompvalue=()=>{
	const option=["rock","paper","scissor"];
	const randId=Math.floor(Math.random()*3);
	return option[randId];
};
const gameDraw=()=>{
	msg.innerText="GAME DRAWN! PLEASE TRY AGAIN";
	msg.style.background="#3D3B40";
}

const showWinner=(userWin,userChoice,compChoice)=>{
	if(userWin){
		userScore++;
		userscoretext.innerText=userScore;
		msg.innerText=`YOU WIN! Your ${userChoice} beats ${compChoice}`;
		msg.style.background="#525CEB";
	}else{
		compScore++;
		compscoretext.innerText=compScore;
		msg.innerText=`COMPUTER WIN! computer choice ${compChoice} beats your ${userChoice}`;
		msg.style.background="#7077A1";
	}
}
const playGame=(userChoice)=>{
	const compChoice=getcompvalue();
	if(userChoice===compChoice){
		gameDraw();
	}else{
		let userWin = true;
		if(userChoice==="rock"){
			if(compChoice==="paper"){
				userWin= false;
			}
			else{
				userWin=true;
			}
		}
		else if(userChoice==="paper"){
			if(compChoice==="scissor"){
				userWin= false;
			}
			else{
				userWin=true;
			}
		}
		else{
			if(compChoice==="rock"){
				userWin= false;
			}
			else{
				userWin=true;
			}	
		}
		showWinner(userWin,userChoice,compChoice);
	}
}

game.forEach((games)=>{
	games.addEventListener("click",()=>{
	const userChoice=games.getAttribute("id");	
	playGame(userChoice);
	})
})