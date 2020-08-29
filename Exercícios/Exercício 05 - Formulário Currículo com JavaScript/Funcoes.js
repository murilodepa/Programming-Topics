/* Verifica se o usuário realmente deseja limpar o formulário */
function confirmarReset() {
    let verificar = confirm("Você realmente deseja limpar o formulário?");
    if (verificar) {
        document.formularioCurriculo.reset();
    }
}

/* Verifica se o email é válido */
function ValidarEmail(email) {
    var emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}

/* Verifica todas as validações necessárias, antes de submeter (enviar) o formulário */
function verificarValidacoes() {

    /* Validação Nome: O Nome deve ter no mínimo 4 (quatro) letras */
    if (document.formularioCurriculo.nome.value.length <= 3) {
        document.formularioCurriculo.nome.value = ""; // Limpar o campo nome 
        alert("O campo Nome deve conter mais de 3 letras!"); // Exibi um alerta para digitar um nome maior
        return false;
    } else {
        /* Regra para analisar se o nome é válido */
        var regra = /^[a-zA-Z\sà-úÀ-Ú]+$/;
        if (!document.formularioCurriculo.nome.value.match(regra)) {
            document.formularioCurriculo.nome.value = ""; // Limpar o campo nome 
            alert("Por favor, digite um nome válido!"); // Exibi um alerta para digitar um nome maior
            return false;
        } else {
            /* Validação Nome: Converte todo o nome para letra maíscula */
            document.formularioCurriculo.nome.value = document.formularioCurriculo.nome.value.toUpperCase();
        }
    }

    /* Validação Estado Civil: Exibe "Selecione um estado civil válido!"" */
    if (document.formularioCurriculo.estadoCivil.value == "Selecione o estado civil") {
        document.getElementById("spanValidacaoEstadoCivil").innerHTML = "Selecione um estado civil válido!";
        spanValidacaoEstadoCivil.style.color = 'red';
        spanValidacaoEstadoCivil.style.fontSize = "clamp(0.05em, 0.05em + 1.2vw, 2em)";
        spanValidacaoEstadoCivil.style.fontWeight = 'bold';
        spanValidacaoEstadoCivil.style.fontFamily = 'Arial';
        return false;
    } else {
        document.getElementById("spanValidacaoEstadoCivil").innerHTML = null;
    }

    /* Validação Objetivo: Converter todo o texto do campo Objetivo em letras minúsculas */
    document.formularioCurriculo.objetivo.value = document.formularioCurriculo.objetivo.value.toLowerCase();

    /* Validação Objetivo: Converter todo o texto do campo Objetivo em letras minúsculas */
    document.formularioCurriculo.objetivo.value = document.formularioCurriculo.objetivo.value.toLowerCase();

    /* Validação "Telefone" e “E-mail”: Informe obrigatoriamente o telefone OU o e-mail */
    var varEmail = document.formularioCurriculo.email.value;
    if (!(document.formularioCurriculo.telefone.value.match(document.formularioCurriculo.telefone.pattern)) && !(ValidarEmail(varEmail))) {
        alert("Por favor, informe o telefone ou o email para contato!");
        return false;
    }

    /* Validação Idioma: Obriga a seleção de um nível de idioma (inglês e espanhol) */
    if (document.formularioCurriculo.ingles.value == "Nível de Inglês" && document.formularioCurriculo.espanhol.value == "Nível de Espanhol") {
        alert("Por favor, insira um nível de idioma em inglês e espanhol!");
        return false;
    } else if (document.formularioCurriculo.ingles.value == "Nível de Inglês" && document.formularioCurriculo.espanhol.value != "Nível de Espanhol") {
        alert("Por favor, insira um nível de idioma em inglês!");
        return false;
    } else if (document.formularioCurriculo.ingles.value != "Nível de Inglês" && document.formularioCurriculo.espanhol.value == "Nível de Espanhol") {
        alert("Por favor, insira um nível de idioma em espanhol!");
        return false;
    }

    /* Validação Linguagem de Programação: Se não escolher nenhuma linguagem de programação, pergunta confirmando se ele deseja enviar o formulário dessa forma */
    let verificarLP = 0;
    let contador = 0;

    /* Percorre todas as posições do checklist de linguagem de programação para analisar se houve marcação ou não */
    while (contador < document.formularioCurriculo.linguagemDeProgramação.length) {
        if (document.formularioCurriculo.linguagemDeProgramação[contador].checked)
            verificarLP++;
        contador++;
    }

    /* Se verificarLP, significa que não tem nenhuma linguagem de programação selecionada */
    if (verificarLP == 0) {
        var analisar = confirm("Deseja realmente submeter o formulario sem assinalar nenhuma linguagem de programação?");
        if (analisar) {
            return true;
        } else {
            return false;
        }
    }
    return true;
}

/* Função para analisar se os demais campos obrigatórios estão preenchidos */
function verificarSubmit() {

    let auxiliar = true;

    /* Aumenta a borda para dar enfâse nos campos não preenchidos */
    document.formularioCurriculo.style.border = "2.2vw";

    /* 
    Analisa demais campo por campo, verificando se foi preenchido ou não, se caso não for é criada 
    uma borda vermelha em volta do campo, e se caso preencher essa borda deixa de existir. 
    */
    if (document.formularioCurriculo.objetivo.value == "") {
        document.formularioCurriculo.objetivo.style.borderColor = "red";
        auxiliar = false;
    } else {
        document.formularioCurriculo.objetivo.style.border = "none";
    }
    if (document.formularioCurriculo.endereco.value == "") {
        document.formularioCurriculo.endereco.style.borderColor = "red";
        auxiliar = false;
    } else {
        document.formularioCurriculo.endereco.style.border = "none";
    }
    if (document.formularioCurriculo.cidade.value == "") {
        document.formularioCurriculo.cidade.style.borderColor = "red";
        auxiliar = false;
    } else {
        document.formularioCurriculo.cidade.style.border = "none";
    }
    if (!(document.formularioCurriculo.estado.value.match(document.formularioCurriculo.estado.pattern))) {
        document.formularioCurriculo.estado.style.borderColor = "red";
        auxiliar = false;
    } else {
        document.formularioCurriculo.estado.style.border = "none";
    }
    if (!(document.formularioCurriculo.cep.value.match(document.formularioCurriculo.cep.pattern))) {
        document.formularioCurriculo.cep.style.borderColor = "red";
        auxiliar = false;
    } else {
        document.formularioCurriculo.cep.style.border = "none";
    }
    if (!(document.formularioCurriculo.celular.value.match(document.formularioCurriculo.celular.pattern))) {
        document.formularioCurriculo.celular.style.borderColor = "red";
        auxiliar = false;
    } else {
        document.formularioCurriculo.celular.style.border = "none";
    }

    /* Se for false, significa que entrou em algum campo obrigatório não preenchido acima */
    if (auxiliar == false) {
        alert("Falta realizar o preenchimento dos campos obrigatórios em vermelhos!");
        return false;
    }
    return true;
}

/* É chamada quando o botão enviar é presionado, verificando se pode estar submetendo o formulário ou não */
function submeterFormulario() {
    if (verificarValidacoes() && verificarSubmit()) {
        alert("O seu formulário de currículo foi cadastrado com sucesso!");
        document.formularioCurriculo.submit();
    }
}