var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

var actualAnswer;
function send(){
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    var question_number;

    if (randomNumber == 1){
       question_number = "<h4>" + number1 + " + " + number2 + "</h4>";
       actualAnswer = parseInt(number1) + parseInt(number2);
    }else if(randomNumber == 2){
        question_number = "<h4>" + number1 + " - " + number2 + "</h4>";
        actualAnswer = parseInt(number1) - parseInt(number2);
    }else if(randomNumber == 3){
        question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
        actualAnswer = parseInt(number1) * parseInt(number2);
    }else if(randomNumber == 4){
        question_number = "<h4>" + number1 + " / " + number2 + "</h4>";
        actualAnswer = parseInt(number1) / parseInt(number2);
    }
    var input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    var check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    var row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    
    document.getElementById("number1").style.visibility = "hidden";
    document.getElementById("number2").style.visibility = "hidden";
    document.getElementById("button").style.visibility = "hidden";
    document.getElementById("label1").style.visibility = "hidden";
    document.getElementById("label2").style.visibility = "hidden";
}

var questionTurn = "player1";
var answerTurn = "player2";
var questionTurns = 0;
var round = 1;

function check(){
   var announce = document.getElementById("announce");
   var getAnswer = document.getElementById("input_check_box").value;
   if(getAnswer == actualAnswer){
    if (answerTurn == "player1"){
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;
        announce.innerHTML = "Point to: " + player1_name + "!"
     }
     else{
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
        announce.innerHTML = "Point to: " + player2_name + "!"
     }
   }else{
    if (answerTurn == "player1"){
       player2_score = player2_score + 1;
       document.getElementById("player2_score").innerHTML = player2_score;
       announce.innerHTML = "Point to: " + player2_name + "!"
    }
    else{
       player1_score = player1_score + 1;
       document.getElementById("player1_score").innerHTML = player1_score;
       announce.innerHTML = "Point to: " + player1_name + "!"
    }
 }
 if (questionTurn == "player1"){
    questionTurn = "player2";
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    questionTurns = questionTurns + 1;
    answerTurn = "player1";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
 }
 else{
    questionTurn = "player1";
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    questionTurns = questionTurns + 1;
    answerTurn = "player2";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
 }
 

 document.getElementById("output").innerHTML = "";
 document.getElementById("number1").value = "";
 document.getElementById("number2").value = "";
 document.getElementById("label1").style.visibility = "visible";
 document.getElementById("label2").style.visibility = "visible";
 document.getElementById("number1").style.visibility = "visible";
 document.getElementById("number2").style.visibility = "visible";
 document.getElementById("button").style.visibility = "visible";

 if (questionTurns == 2){
    round = 2;
    document.getElementById("round").innerHTML = "Round 2 of 10";
 }else if(questionTurns == 4){
    round = 3;
    document.getElementById("round").innerHTML = "Round 3 of 10";
 }else if(questionTurns == 6){
    round = 4;
    document.getElementById("round").innerHTML = "Round 4 of 10";
 }else if(questionTurns == 8){
    round = 5;
    document.getElementById("round").innerHTML = "Round 5 of 10";
 }else if(questionTurns == 10){
    round = 6;
    document.getElementById("round").innerHTML = "Round 6 of 10";
 }else if(questionTurns == 12){
    round = 7;
    document.getElementById("round").innerHTML = "Round 7 of 10";
 }else if(questionTurns == 14){
    round = 8;
    document.getElementById("round").innerHTML = "Round 8 of 10";
 }else if(questionTurns == 16){
    round = 9;
    document.getElementById("round").innerHTML = "Round 9 of 10";
 }else if(questionTurns == 18){
    round = 10;
    document.getElementById("round").innerHTML = "Round 10 of 10";
 }else if(questionTurns == 20){
    if(player1_score > player2_score){
       announce.innerHTML = "Player 1 wins!";
       document.getElementById("number1").style.visibility = "hidden";
       document.getElementById("number2").style.visibility = "hidden";
       document.getElementById("button").style.visibility = "hidden";
       document.getElementById("label1").style.visibility = "hidden";
       document.getElementById("label2").style.visibility = "hidden";
       document.getElementById("player_question").style.visibility = "hidden";
       document.getElementById("player_answer").style.visibility = "hidden";
    }else if(player1_score == player2_score){
       announce.innerHTML = "It's a tie!";
       document.getElementById("number1").style.visibility = "hidden";
       document.getElementById("number2").style.visibility = "hidden";
       document.getElementById("button").style.visibility = "hidden";
       document.getElementById("label1").style.visibility = "hidden";
       document.getElementById("label2").style.visibility = "hidden";
       document.getElementById("player_question").style.visibility = "hidden";
       document.getElementById("player_answer").style.visibility = "hidden";
    }else if(player1_score < player2_score){
       announce.innerHTML = "Player 2 wins!";
       document.getElementById("number1").style.visibility = "hidden";
       document.getElementById("number2").style.visibility = "hidden";
       document.getElementById("button").style.visibility = "hidden";
       document.getElementById("label1").style.visibility = "hidden";
       document.getElementById("label2").style.visibility = "hidden";
       document.getElementById("player_question").style.visibility = "hidden";
       document.getElementById("player_answer").style.visibility = "hidden";
    }
 }
}