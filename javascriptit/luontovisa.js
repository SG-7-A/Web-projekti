
const NO_ANSWER = ""

function getResults(){

if (document.getElementById("correct1").checked){
    document.getElementById("result1").innerHTML = "Oikein! Karhu nukkuu noin puolet vuodesta talviunta. Uni on sen keino selvitä talven yli käyttämällä mahdollisimman vähän energiaa. "
        document.getElementById("correct1").disabled = true;
        document.getElementById("wrong1").disabled = true;
        document.getElementById("wrong2").disabled = true;
        document.getElementById("kuva1").hidden = false;

    } else if (document.getElementById("wrong1").checked || document.getElementById("wrong2").checked){
        document.getElementById("result1").innerHTML = "Vastasit väärin. oikea vastaus on karhu, joka nukkuu noin puolet vuodesta talviunta. Uni on sen keino selvitä talven yli käyttämällä mahdollisimman vähän energiaa. "
            document.getElementById("correct1").disabled = true;
            document.getElementById("wrong1").disabled = true;
            document.getElementById("wrong2").disabled = true;

        } else {
            document.getElementById("result1").innerHTML = NO_ANSWER;
            }


if (document.getElementById("correct2").checked){
    document.getElementById("result2").innerHTML = "Oikein! Kärpäset kakkaavat viiden minuutin välein ja oksentavat ruokansa päälle ennen kuin syövät sen. Kärpäset maistavat jaloillaan, ovat kuuroja ja niiden täytyy vieläpä hypätä taaksepäin päästäkseen lentoon."
        document.getElementById("correct2").disabled = true;
        document.getElementById("wrong3").disabled = true;
        document.getElementById("wrong4").disabled = true;
        document.getElementById("kuva2").hidden = false;

    } else if (document.getElementById("wrong3").checked || document.getElementById("wrong4").checked){
            document.getElementById("result2").innerHTML = "Vastasit väärin. Kärpäset kakkaavat viiden minuutin välein ja oksentavat ruokansa päälle ennen kuin syövät sen. Kärpäset maistavat jaloillaan, ovat kuuroja ja niiden täytyy vieläpä hypätä taaksepäin päästäkseen lentoon."
                document.getElementById("correct2").disabled = true;
                document.getElementById("wrong3").disabled = true;
                document.getElementById("wrong4").disabled = true;

        } else{
            document.getElementById("result2").innerHTML = NO_ANSWER
        }


if (document.getElementById("correct3").checked){
    document.getElementById("result3").innerHTML = "Oikein! Jääkarhun iho on musta. Tumma iho nappaa vähäisetkin auringonsäteet ja auttaa pysymään lämpimänä."
        document.getElementById("correct3").disabled = true;
        document.getElementById("wrong5").disabled = true;
        document.getElementById("wrong6").disabled = true;
        document.getElementById("kuva3").hidden = false;
    
    } else if( document.getElementById("wrong5").checked || document.getElementById("wrong6").checked){
            document.getElementById("result3").innerHTML = "Vastasit väärin. Jääkarhun iho on musta. Tumma iho nappaa vähäisetkin auringonsäteet ja auttaa pysymään lämpimänä."
                document.getElementById("correct3").disabled = true;
                document.getElementById("wrong5").disabled = true;
                document.getElementById("wrong6").disabled = true;

        } else {
            document.getElementById("result3").innerHTML = NO_ANSWER
        }


if (document.getElementById("correct4").checked){
    document.getElementById("result4").innerHTML = "Oikein! Suomessa kasvaa noin 30 eri puulajia, joista yleisin on mänty. Toiseksi yleisin on kuusi ja kolmatta sijaa pitää mänty."
        document.getElementById("correct4").disabled = true;
        document.getElementById("wrong7").disabled = true;
        document.getElementById("wrong8").disabled = true;
        document.getElementById("kuva4").hidden = false;
    

    } else if( document.getElementById("wrong7").checked || document.getElementById("wrong8").checked){
            document.getElementById("result4").innerHTML = "Väärin. Suomessa kasvaa noin 30 eri puulajia, joista yleisin on mänty. Toiseksi yleisin on kuusi ja kolmatta sijaa pitää mänty."
                document.getElementById("correct4").disabled = true;
                document.getElementById("wrong7").disabled = true;
                document.getElementById("wrong8").disabled = true;
        } else {
            document.getElementById("result4").innerHTML = NO_ANSWER
            }

if (document.getElementById("correct5").checked){
    document.getElementById("result5").innerHTML = "Oikein! Hännän pudottaminen on yksi hämäystaktiikka, jolla sisilisko voi päästä ahdistelijan ulottumattomiin. Kun ahdistelijan huomio on kiinnittynyt pudonneeseen häntään, sisilisko voi livahtaa karkuun."
        document.getElementById("correct5").disabled = true;
        document.getElementById("wrong9").disabled = true;
        document.getElementById("wrong10").disabled = true;
        document.getElementById("kuva5").hidden = false;

 } else if( document.getElementById("wrong9").checked || document.getElementById("wrong10").checked){
        document.getElementById("result5").innerHTML = "Väärin. Hännän pudottaminen on yksi sisiliskon hämäystaktiikoista, jolla sisilisko voi päästä ahdistelijan ulottumattomiin. Kun ahdistelijan huomio on kiinnittynyt pudonneeseen häntään, sisilisko voi livahtaa karkuun."
            document.getElementById("correct5").disabled = true;
            document.getElementById("wrong9").disabled = true;
            document.getElementById("wrong10").disabled = true;
    } else {
        document.getElementById("result5").innerHTML = NO_ANSWER
        }
}