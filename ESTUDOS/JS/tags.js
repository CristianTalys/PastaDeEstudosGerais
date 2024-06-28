function mudaCorFundo() {
    var fundo = document.getElementById("fundo");
    var botao = document.getElementById('dark-light');

    if (fundo.style.backgroundColor == 'white') {
        fundo.style.backgroundColor = '#282A36'; fundo.style.color = 'black';

        botao.style.border = '5px solid white';
        botao.style.backgroundColor = '#282A36';
        botao.style.color = 'white';
    } else {
        fundo.style.backgroundColor = 'white'; fundo.style.color = 'black';

        botao.style.border = '5px solid black';
        botao.style.backgroundColor = 'white';
        botao.style.color = 'black';
    };
}