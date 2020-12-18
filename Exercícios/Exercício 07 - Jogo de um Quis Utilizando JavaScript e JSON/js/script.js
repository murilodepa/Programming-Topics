var count = 0;
var respCorreta = 0;
var NumeroDaQuest = 0;

function loadQuestion(resp) {
    var f = questions;
    var indice;

    var indiceAlt = Math.floor((Math.random() * 4));

    document.getElementById('qtdImagens').innerHTML = NumeroDaQuest + " / 11 – ";
    NumeroDaQuest++;


    if (NumeroDaQuest <= 11) {
        do {
            indice = Math.floor((Math.random() * 11));
        } while (!f[indice]);

        switch(f[indice].nome){
            case ("Pantera"):
                document.getElementById('pers').className = 'pantera';
                break;
            case("AdamWarlock"):
                 document.getElementById('pers').className = 'adamlock';
                 break; 
            case("Mercurio"):
                document.getElementById('pers').className = 'mercurio';
                break;
            case("Elektra"):
                document.getElementById('pers').className = 'elektra';
                break;
            case("Hulk"):
                document.getElementById('pers').className = 'hulk';
                break;
            case("Viúva Negra"):
                document.getElementById('pers').className = 'viuva';   
                break;     
            case("Thor"):
                document.getElementById('pers').className = 'thor';     
                break;
            case("Homem-Aranha"):
                document.getElementById('pers').className = 'miranha'; 
                break;
            case("Deadpool"):
                 document.getElementById('pers').className = 'dead';     
                 break; 
            case("Feiticeira Escarlate"):
                 document.getElementById('pers').className = 'feiticeira';     
                 break; 
            case("Doutor Estranho"):
                 document.getElementById('pers').className = 'estranho';
                 break;         
        }

        //console.log(document.getElementById("resp" + resp).value);
        //if (resp != undefined) Aux = document.getElementById("resp" + resp).value;

        var res;
        for (var i = 0; i < 4; i++) {
            document.getElementById('resp' + i).innerHTML = f[indice].respostas[(indiceAlt % 4)];
            indiceAlt++;

            if (f[indice].respPrinc == f[indice].respostas[(indiceAlt % 4)]) {
                if (i == 3)
                    res = 0;
                else
                    res = i + 1;
                console.log("res" + res);
            }
        }

        document.getElementById('imgQuiz').innerHTML = "<img src=" + f[indice].imagem + " class = editarImagens> ";

        if (resp != -1) {
            if (resp == respCorreta)
                count++;

            document.getElementById('contQuiz').innerHTML = count;
        }

        respCorreta = res;

        delete f[indice];
    } else {

        if (resp != -1) {
            if (resp == respCorreta) {
                count++;
            }
            document.getElementById('contQuiz').innerHTML = count;
        }

        if (count != 0)
            window.location.href = "./pages/PagResult.html?" + (count) + "=count=" + pausar() + "=tempo";
        else
            window.location.href = "./pages/PagResult.html?" + 0 + "=count=" + pausar() + "=tempo";

        resetar();
    }
}

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; // 1000 milésimos equivalem a 1 segundo
var cronometro;

function comecar() {
    cronometro = setInterval(() => { timer(); }, tempo);
    console.log("entrou......");
}

function pausar() {
    clearInterval(cronometro);
    return document.getElementById('contador').innerText;
}

function resetar() {
    clearInterval(cronometro);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('contador').innerText = '00:00:00';
}

function timer() {
    ss++;

    if (ss == 60) {
        ss = 0;
        mm++;

        if (mm == 60) {
            mm = 0;
            hh++;
        }
    }
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('contador').innerText = format;
}

window.onload = function () {
    comecar();
}

