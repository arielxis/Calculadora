//DIGITAÇÃO DO CALCULO ==================================
function digitar(a){
    document.getElementById('equacao').innerHTML += a;
}


//APAGA TODO O CALCULO ==================================
function limparEquacao (){
    document.getElementById('equacao').innerHTML = "";
}


//Apaga só o último dígito dentro do cálculo ============
function apagar(){
    document.getElementById('equacao').innerHTML = document.getElementById('equacao').innerHTML.replace(/.$/, '')
}


//FAZER O CÁLCULO =======================================
function executarEquacao(){
    //MOSTRA A NAZARE
    //      seleciona a nazaré...    |e remove a classe .esconder
    document.getElementById('nazare').classList.remove('esconder');

    //Esconde a nazaré depois de alguns segundos
    setTimeout(
        function () {
            //      seleciona a nazaré...    
            //                                e devolve a classe .esconder em  milissegundos
            document.getElementById('nazare').classList.add('esconder')},      3000);
    
    //EXECUTA O CÁLCULO COM UM ATRASO, PARA TODOS VEREM A TRANSIÇÃO
    setTimeout(// <-- função do timer
        function (){
            // Seleciona o conteúdo da equação (string)
            //                                           e transforma em uma expressão 
            document.getElementById('equacao').innerHTML = eval(document.getElementById('equacao').innerHTML)},
        4000);
}


// MODO NOTURNO
function ligarNoite() {
    
    //seleciona o [x] checkbox e guarda na variável "noite"
    let noite = document.getElementById('check-noturno');

    //selecionar os elementos que quero mudar a cor
    let fundo = document.getElementById('geral');

    
    if (noite.checked == true){//SE check-noturno = false (não está marcado) [x], então será modo noturno

        fundo.classList.add('modo-noturno');

    } else { //SE NÃO (false), não está marcado [ ], então tira o modo noturno

        fundo.classList.remove('modo-noturno');
    
    }

    
}




















