function addUser(){
   var player1_name = document.getElementById("player1_name_input").value;
   var player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location.replace("quiz_game_page.html");
}