function translateAPI(idCards, SelectIdioma, verEnglish) {

    if (verEnglish == true) {
        document.getElementById('languagens').className = 'imgEUA';
    }

    let cont = 0,
        idioma;

    if (localStorage.getItem("lastIdioma") == null) {


        idioma = 'pt-' + SelectIdioma;

        localStorage.setItem("lastIdioma", SelectIdioma);
    
    } else {

        idioma = localStorage.getItem("lastIdioma") + '-' + SelectIdioma;

        localStorage.setItem("lastIdioma", SelectIdioma);
    }

    let aux = idCards[cont];
    let textDocument = document.getElementById(aux).innerHTML;

    if (idioma !== "en-en") {

        for (cont = 0; cont < idCards.length; cont++) {

            let aux = idCards[cont];
            textDocument = document.getElementById(aux).innerHTML;
            $.post("/ibmTranslate/translator", { textDocument, idioma },
                function(returnedData, statusRequest) {
                    if (returnedData.status === 'ERRO') alert(returnedData);
                    else {
                        const TextData = JSON.stringify(returnedData.data.result.translations[0].translation);
                        const TData = TextData.slice(1, -1);
                        document.getElementById(aux).innerHTML = TData;
                    }
                }
            ).fail(function(returnedData) {
                alert('Erro: ' + returnedData.status + ' ' + returnedData.statusText);
            });
        }
    }
}

function translateOtherLanguagens(idCards, idioma) {

    switch (idioma) {
        case ("es"):
            document.getElementById('languagens').className = 'imgEspanha';
            break;

        case ("de"):
            document.getElementById('languagens').className = 'imgAlemanha';
            break;

        case ("fr"):
            document.getElementById('languagens').className = 'imgFranca';
            break;

        case ("pt"):
            document.getElementById('languagens').className = 'imgLanguages';
            break;
    }

    translateAPI(idCards, 'en', false);
    setTimeout(() => { translateAPI(idCards, idioma, false); }, 2000);
}