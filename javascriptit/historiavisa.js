function results(){

if (document.getElementById("correct1").checked){
    document.getElementById("answer1").innerHTML = "Oikein!"
    document.getElementById("correct1").disabled = true;
    document.getElementById("wrong1").disabled = true;
    document.getElementById("wrong2").disabled = true;

} else if (document.getElementById("wrong1").checked || document.getElementById("wrong2").checked){
    document.getElementById("answer1").innerHTML = "Väärin"
    document.getElementById("correct1").disabled = true;
    document.getElementById("wrong1").disabled = true;
    document.getElementById("wrong2").disabled = true;
 }
}

