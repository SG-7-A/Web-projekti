//document.getElementById("results-h").onclick = function() {
   // getResults();
//}
const NO_ANSWER = ""

function getResults(){

if (document.getElementById("correct1").checked){
    document.getElementById("result1").innerHTML = "Vastaus on oikein"
}

else if( document.getElementById("wrong1").checked || document.getElementById("wrong2").checked) {
    document.getElementById("result1").innerHTML = "Väärin"
}

else {
    document.getElementById("result1").innerHTML = NO_ANSWER;
}



if (document.getElementById("correct2").checked){
    document.getElementById("result2").innerHTML = "Vastaus on oikein"
}
    else if( document.getElementById("wrong3").checked || document.getElementById("wrong4").checked) {
        document.getElementById("result2").innerHTML = "Väärin"
    }

else {
    document.getElementById("result2").innerHTML = NO_ANSWER

}


if (document.getElementById("correct3").checked){
    document.getElementById("result3").innerHTML = "Vastaus on oikein"

 } else if( document.getElementById("wrong5").checked || document.getElementById("wrong6").checked) {
        document.getElementById("result3").innerHTML = "Väärin"
    }

else {
    document.getElementById("result3").innerHTML = NO_ANSWER

}


if (document.getElementById("correct4").checked){
    document.getElementById("result4").innerHTML = "Vastaus on oikein"

 } else if( document.getElementById("wrong7").checked || document.getElementById("wrong8").checked) {
        document.getElementById("result4").innerHTML = "Väärin"
    }

else {
    document.getElementById("result4").innerHTML = NO_ANSWER
}

if (document.getElementById("correct5").checked){
    document.getElementById("result5").innerHTML = "Vastaus on oikein"

 } else if( document.getElementById("wrong9").checked || document.getElementById("wrong10").checked) {
        document.getElementById("result5").innerHTML = "Väärin"
    }

else {
    document.getElementById("result5").innerHTML = NO_ANSWER

}
}