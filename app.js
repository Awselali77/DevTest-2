// putting X and O and checking if there the box is full or empty
var x = 2 // for the turn
//result = confirm(question);
var winP1 = 0
var winP2 = 0
//var player1 =function(){ confirm("Player 1 is the winner")}


function onClick(id){
	//console.log(id)
		if (document.getElementById(id).innerHTML === ""){ 
		// checking if the box is full or not

x++
// if the x = 0 then it's player 1 on turn(X)
	if(x % 2 === 0){ 
		document.getElementById("player").innerHTML = "Player 1 turns"
	document.getElementById(id).innerHTML = "O"
	}
	// if the x is odd then it's player 2 on turn(O)
	if(x % 2 !== 0){ 
		document.getElementById("player").innerHTML = "Player 2 turns"
document.getElementById(id).innerHTML = "X"
  }
 }
 
// when the board is full then (Game Over)
 if ((document.getElementById(1).innerHTML === "X" || document.getElementById(1).innerHTML === "O") &&
     (document.getElementById(2).innerHTML === "X" || document.getElementById(2).innerHTML === "O") && 
     (document.getElementById(3).innerHTML === "X" || document.getElementById(3).innerHTML === "O") &&
     (document.getElementById(4).innerHTML === "X" || document.getElementById(4).innerHTML === "O") && 
     (document.getElementById(5).innerHTML === "X" || document.getElementById(5).innerHTML === "O") && 
     (document.getElementById(6).innerHTML === "X" || document.getElementById(6).innerHTML === "O") && 
     (document.getElementById(7).innerHTML === "X" || document.getElementById(7).innerHTML === "O") && 
     (document.getElementById(8).innerHTML === "X" || document.getElementById(8).innerHTML === "O") && 
     (document.getElementById(9).innerHTML === "X" || document.getElementById(9).innerHTML === "O")){
document.getElementById("player").innerHTML = "Game Over"
 }
if (document.getElementById("player").innerHTML === "Game Over"){
setTimeout(function() {alert("Game Over")},200)
reset()

}

// putting the rules for the game for X
if (document.getElementById(1).innerHTML === "X" && document.getElementById(2).innerHTML === "X" && document.getElementById(3).innerHTML === "X" || 
	document.getElementById(4).innerHTML === "X" && document.getElementById(5).innerHTML === "X" && document.getElementById(6).innerHTML === "X" ||
	document.getElementById(7).innerHTML === "X" && document.getElementById(8).innerHTML === "X" && document.getElementById(9).innerHTML === "X" ||
	document.getElementById(1).innerHTML === "X" && document.getElementById(4).innerHTML === "X" && document.getElementById(7).innerHTML === "X" ||
	document.getElementById(2).innerHTML === "X" && document.getElementById(5).innerHTML === "X" && document.getElementById(8).innerHTML === "X" ||
	document.getElementById(3).innerHTML === "X" && document.getElementById(6).innerHTML === "X" && document.getElementById(9).innerHTML === "X" ||
	document.getElementById(1).innerHTML === "X" && document.getElementById(5).innerHTML === "X" && document.getElementById(9).innerHTML === "X" ||
	document.getElementById(3).innerHTML === "X" && document.getElementById(5).innerHTML === "X" && document.getElementById(7).innerHTML === "X"){
if (document.getElementById("player").innerHTML === "Player 2 is the winner"){
}
document.getElementById("player").innerHTML = "Player 1 is the winner" 
setTimeout(function() {alert("Player 1 is the winner")},100)

}
// putting the rules for the game for O
if (document.getElementById(1).innerHTML === "O" && document.getElementById(2).innerHTML === "O" && document.getElementById(3).innerHTML === "O" || 
	document.getElementById(4).innerHTML === "O" && document.getElementById(5).innerHTML === "O" && document.getElementById(6).innerHTML === "O" ||
	document.getElementById(7).innerHTML === "O" && document.getElementById(8).innerHTML === "O" && document.getElementById(9).innerHTML === "O" ||
	document.getElementById(1).innerHTML === "O" && document.getElementById(4).innerHTML === "O" && document.getElementById(7).innerHTML === "O" ||
	document.getElementById(2).innerHTML === "O" && document.getElementById(5).innerHTML === "O" && document.getElementById(8).innerHTML === "O" ||
	document.getElementById(3).innerHTML === "O" && document.getElementById(6).innerHTML === "O" && document.getElementById(9).innerHTML === "O" ||
	document.getElementById(1).innerHTML === "O" && document.getElementById(5).innerHTML === "O" && document.getElementById(9).innerHTML === "O" ||
	document.getElementById(3).innerHTML === "O" && document.getElementById(5).innerHTML === "O" && document.getElementById(7).innerHTML === "O"){
if(document.getElementById("player").innerHTML === "Player 1 is the winner" ){
}
document.getElementById("player").innerHTML = "Player 2 is the winner" 
setTimeout(function() {alert("Player 2 is the winner")},100)

}

if (document.getElementById("player").innerHTML === "Player 1 is the winner"){
winP1++
setTimeout(setTimeout(function() {reset()},100))
}
if (document.getElementById("player").innerHTML === "Player 2 is the winner"){

winP2 ++
setTimeout(setTimeout(function() {reset()},100))
}
document.getElementById("winsP1").innerHTML = "Player 1 wins  =  " + winP1
document.getElementById("winsP2").innerHTML = "Player 2 wins  =  " + winP2

}

function reset(){

	
	//location.reload()
	document.getElementById(1).innerHTML=""
	document.getElementById(2).innerHTML=""
	document.getElementById(3).innerHTML=""
	document.getElementById(4).innerHTML=""
	document.getElementById(5).innerHTML=""
	document.getElementById(6).innerHTML=""
	document.getElementById(7).innerHTML=""
	document.getElementById(8).innerHTML=""
	document.getElementById(9).innerHTML=""



}











