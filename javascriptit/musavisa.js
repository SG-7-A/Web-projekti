
  const NO_ANSWER = ""

function getResults(){

if (document.getElementById("correct1").checked){
    document.getElementById("result1").innerHTML = "Vastasit oikein! Kuvassa on kitara."
        document.getElementById("correct1").disabled = true;
        document.getElementById("wrong1").disabled = true;
        document.getElementById("wrong2").disabled = true;
        document.getElementById("kuva1").hidden = false;

    } else if (document.getElementById("wrong1").checked || document.getElementById("wrong2").checked){
        document.getElementById("result1").innerHTML = "Vastasit väärin. Oikea vastaus on kitara. "
            document.getElementById("correct1").disabled = true;
            document.getElementById("wrong1").disabled = true;
            document.getElementById("wrong2").disabled = true;

        } else {
            document.getElementById("result1").innerHTML = NO_ANSWER;
            }


if (document.getElementById("correct2").checked){
    document.getElementById("result2").innerHTML = "Vastasit oikein! Suomen kansallislaulu on Maamme-laulu."
        document.getElementById("correct2").disabled = true;
        document.getElementById("wrong3").disabled = true;
        document.getElementById("wrong4").disabled = true;
        document.getElementById("kuva2").hidden = false;

    } else if (document.getElementById("wrong3").checked || document.getElementById("wrong4").checked){
            document.getElementById("result2").innerHTML = "Vastasit väärin. Suomen kansallislaulu on Maamme-laulu."
                document.getElementById("correct2").disabled = true;
                document.getElementById("wrong3").disabled = true;
                document.getElementById("wrong4").disabled = true;

        } else{
            document.getElementById("result2").innerHTML = NO_ANSWER
        }


if (document.getElementById("correct3").checked){
    document.getElementById("result3").innerHTML = "Vastasit oikein! Laulu jatkuu sanoilla: istui aidalla"
        document.getElementById("correct3").disabled = true;
        document.getElementById("wrong5").disabled = true;
        document.getElementById("wrong6").disabled = true;
        document.getElementById("kuva3").hidden = false;
    
    } else if( document.getElementById("wrong5").checked || document.getElementById("wrong6").checked){
            document.getElementById("result3").innerHTML = "Vastasit väärin. Laulu jatkuu sanoilla: istui aidalla"
                document.getElementById("correct3").disabled = true;
                document.getElementById("wrong5").disabled = true;
                document.getElementById("wrong6").disabled = true;

        } else {
            document.getElementById("result3").innerHTML = NO_ANSWER
        }


if (document.getElementById("correct4").checked){
    document.getElementById("result4").innerHTML = "Vastasit oikein! Kuvassa on rummut."
        document.getElementById("correct4").disabled = true;
        document.getElementById("wrong7").disabled = true;
        document.getElementById("wrong8").disabled = true;
        document.getElementById("kuva4").hidden = false;
    

    } else if( document.getElementById("wrong7").checked || document.getElementById("wrong8").checked){
            document.getElementById("result4").innerHTML = "Vastasit väärin. Kuvassa on rummut."
                document.getElementById("correct4").disabled = true;
                document.getElementById("wrong7").disabled = true;
                document.getElementById("wrong8").disabled = true;
        } else {
            document.getElementById("result4").innerHTML = NO_ANSWER
            }

if (document.getElementById("correct5").checked){
    document.getElementById("result5").innerHTML = "Vastasit oikein! Laulun mukaan kumi paikattiin purukumilla."
        document.getElementById("wrong9").disabled = true;
        document.getElementById("wrong10").disabled = true;
        document.getElementById("kuva5").hidden = false;

 } else if( document.getElementById("wrong9").checked || document.getElementById("wrong10").checked){
        document.getElementById("result5").innerHTML = "Vastasit väärin. Laulun mukaan kumi paikattiin purukumilla."
            document.getElementById("wrong9").disabled = true;
            document.getElementById("wrong10").disabled = true;
    } else {
        document.getElementById("result5").innerHTML = NO_ANSWER
        }
}