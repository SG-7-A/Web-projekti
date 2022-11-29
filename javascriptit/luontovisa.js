//document.getElementById("results-h").onclick = function() {
   // getResults();
//}
const NO_ANSWER = ""

function getResults(){

let questions = document.getElementsByClassName("questions").innerHTML;
let correctAnswer = document.getElementsByClassName("correct").innerHTML;
let wrongAnswer = document.getElementsByClassName("wrong").innerHTML;


if (document.getElementById("correct1").checked){
    document.getElementById("results").innerHTML = "Vastaus on oikein"

}else if (document.getElementsByClassName("wrong").checked){
    document.getElementById("results").innerHTML = "Vastaus on väärin"

} else {
    document.getElementById("results").innerHTML = NO_ANSWER;
}


}