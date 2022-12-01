//document.getElementById("results-h").onclick = function() {
   // getResults();
//}
const NO_ANSWER = ""

function getResults(){

if (document.getElementById("correct1").checked){
    document.getElementById("result1").innerHTML = "Vastaus on oikein"
        document.getElementById("correct1").disabled = true;
        document.getElementById("wrong1").disabled = true;
        document.getElementById("wrong2").disabled = true;
}

else if( document.getElementById("wrong1").checked || document.getElementById("wrong2").checked) {
    document.getElementById("result1").innerHTML = "Väärin"
        document.getElementById("correct1").disabled = true;
        document.getElementById("wrong1").disabled = true;
        document.getElementById("wrong2").disabled = true;
}

else {
    document.getElementById("result1").innerHTML = NO_ANSWER;
}




if (document.getElementById("correct2").checked){
    document.getElementById("result2").innerHTML = "Vastaus on oikein"
        document.getElementById("correct2").disabled = true;
        document.getElementById("wrong3").disabled = true;
        document.getElementById("wrong4").disabled = true;
}
    else if( document.getElementById("wrong3").checked || document.getElementById("wrong4").checked) {
        document.getElementById("result2").innerHTML = "Väärin"
            document.getElementById("correct2").disabled = true;
            document.getElementById("wrong3").disabled = true;
            document.getElementById("wrong4").disabled = true;
    }

else {
    document.getElementById("result2").innerHTML = NO_ANSWER

}


if (document.getElementById("correct3").checked){
    document.getElementById("result3").innerHTML = "Vastaus on oikein"
        document.getElementById("correct3").disabled = true;
        document.getElementById("wrong5").disabled = true;
        document.getElementById("wrong6").disabled = true;


 } else if( document.getElementById("wrong5").checked || document.getElementById("wrong6").checked) {
        document.getElementById("result3").innerHTML = "Väärin"
            document.getElementById("correct3").disabled = true;
            document.getElementById("wrong5").disabled = true;
            document.getElementById("wrong6").disabled = true;
    }

else {
    document.getElementById("result3").innerHTML = NO_ANSWER

}


if (document.getElementById("correct4").checked){
    document.getElementById("result4").innerHTML = "Vastaus on oikein"
        document.getElementById("correct4").disabled = true;
        document.getElementById("wrong7").disabled = true;
        document.getElementById("wrong8").disabled = true;

 } else if( document.getElementById("wrong7").checked || document.getElementById("wrong8").checked) {
        document.getElementById("result4").innerHTML = "Väärin"
            document.getElementById("correct4").disabled = true;
            document.getElementById("wrong7").disabled = true;
            document.getElementById("wrong8").disabled = true;
    }

else {
    document.getElementById("result4").innerHTML = NO_ANSWER
}

if (document.getElementById("correct5").checked){
    document.getElementById("result5").innerHTML = "Vastaus on oikein"
        document.getElementById("correct5").disabled = true;
        document.getElementById("wrong9").disabled = true;
        document.getElementById("wrong10").disabled = true;

 } else if( document.getElementById("wrong9").checked || document.getElementById("wrong10").checked) {
        document.getElementById("result5").innerHTML = "Väärin"
            document.getElementById("correct5").disabled = true;
            document.getElementById("wrong9").disabled = true;
            document.getElementById("wrong10").disabled = true;
    }

else {
    document.getElementById("result5").innerHTML = NO_ANSWER

}
}