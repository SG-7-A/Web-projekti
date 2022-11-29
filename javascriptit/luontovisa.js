//document.getElementById("results-h").onclick = function() {
   // getResults();
//}

function getResults(){

let questions = document.getElementsByClassName("questions").innerHTML;
let correctAnswer = document.getElementsByClassName("correct").innerHTML;
let wrongAnswer = document.getElementsByClassName("wrong").innerHTML;


if (document.getElementById("correct1").checked){
    document.getElementById("results").innerHTML = "Vastaus on oikein"

}else {
    document.getElementById("results").innerHTML = "Vastaus on väärin, oikea vastaus on karhu." 
}
}