function results(){

/* Kysymys 1 */
if (document.getElementById("correct1").checked){
    document.getElementById("answer1").innerHTML = "Oikein!"
    document.getElementById("correct1").disabled = true;
    document.getElementById("wrong1").disabled = true;
    document.getElementById("wrong2").disabled = true;
    document.getElementById("kahvi1").style.opacity = 1;

} else if (document.getElementById("wrong1").checked || document.getElementById("wrong2").checked){
    document.getElementById("answer1").innerHTML = "Väärin"
    document.getElementById("correct1").disabled = true;
    document.getElementById("wrong1").disabled = true;
    document.getElementById("wrong2").disabled = true;
}

/* Kysymys 2 */
if (document.getElementById("correct2").checked){
    document.getElementById("answer2").innerHTML = "Oikein!"
    document.getElementById("correct2").disabled = true;
    document.getElementById("wrong3").disabled = true;
    document.getElementById("wrong4").disabled = true;
    document.getElementById("kahvi2").style.opacity = 1;

} else if (document.getElementById("wrong3").checked || document.getElementById("wrong4").checked){
    document.getElementById("answer2").innerHTML = "Väärin"
    document.getElementById("correct2").disabled = true;
    document.getElementById("wrong3").disabled = true;
    document.getElementById("wrong4").disabled = true;
}

/* Kysymys 3 */
if (document.getElementById("correct3").checked){
    document.getElementById("answer3").innerHTML = "Oikein!"
    document.getElementById("correct3").disabled = true;
    document.getElementById("wrong5").disabled = true;
    document.getElementById("wrong6").disabled = true;
    document.getElementById("kahvi3").style.opacity = 1;

} else if (document.getElementById("wrong5").checked || document.getElementById("wrong6").checked){
    document.getElementById("answer3").innerHTML = "Väärin"
    document.getElementById("correct3").disabled = true;
    document.getElementById("wrong5").disabled = true;
    document.getElementById("wrong6").disabled = true;
}

/* Kysymys 4 */
if (document.getElementById("correct4").checked){
    document.getElementById("answer4").innerHTML = "Oikein!"
    document.getElementById("correct4").disabled = true;
    document.getElementById("wrong7").disabled = true;
    document.getElementById("wrong8").disabled = true;
    document.getElementById("kahvi4").style.opacity = 1;
    

} else if (document.getElementById("wrong7").checked || document.getElementById("wrong8").checked){
    document.getElementById("answer4").innerHTML = "Väärin"
    document.getElementById("correct4").disabled = true;
    document.getElementById("wrong7").disabled = true;
    document.getElementById("wrong8").disabled = true;
}


}

