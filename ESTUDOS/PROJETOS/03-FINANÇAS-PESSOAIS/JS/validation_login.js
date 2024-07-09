/*=======================================================================================*/
/* aqui chamo as funcoes correspondentes ao email somente, isolando da senha */
/* tem outras formas de fazer, o codigo ta uma merda, sinta se a vontade para refatorar ^^ */

function mainFunctionEmail() {

    desabilitarBotoes();
    msgErroEmail();


    }  

/*=======================================================================================*/
/* codigo ta uma bosta, porem funcional, sinta se a vontade pra refatorar */
function mainFunctionSenha(){

    desabilitarBotoes();
    msgErroSenha();

}
/* aqui eu estou validando se email é null, e se ele e invalido ou valido */
function validarEmail(){
    const email = document.getElementById("email").value;

    if(!email){
        console.clear(),console.error("Campo Email = Null");
        return false;  

    }else if(!emailOkay(email)){
        console.clear(),console.error("Campo Email Invalido");
        return false;
         
    }else{
        console.clear(),console.warn("Campo Email Valido")
        return emailOkay(email);
    }
}

/*=======================================================================================*/
    /* aqui valido se senha é null */
function validarSenha(){
    const senha = document.getElementById("senha").value;
    if(!senha){
        console.error("Sem Senha = Null");
        return false;
    
    }
    console.warn("!Null");
    return true;
}
/*=======================================================================================*/
    /* aqui faço uma validacao igual a function validarEmail() porem mostro msg */ 
    /* Codigo ta BEM RUIM, fique a vontade pra refatorar, pra fazer com operador ternario,
    e tbm a validacao no proprio validarEmail(). */
function msgErroEmail(){

    const email = document.getElementById("email").value;
    if(!email){
        document.getElementById("msg-insira-email").style.display = "block";
    }else{
        document.getElementById("msg-insira-email").style.display = "none";
    }

    if(!emailOkay(email)){
        document.getElementById("msg-email-invalido").style.display = "block";
    }else{
        document.getElementById("msg-email-invalido").style.display = "none";
    }
}

/* aqui faço uma validacao igual a function validarSenha() porem mostro msg */ 

function msgErroSenha(){
    const senha = document.getElementById("senha").value;
    if(!senha){
        document.getElementById("msg-insira-senha").style.display = "block";
    }else{
        document.getElementById("msg-insira-senha").style.display = "none";
    }
}

/*=======================================================================================*/
/* aqui habilito e desabilito os botoes Entrar/EsqueceuSenha de acordo com o return das funcoes */ 

function desabilitarBotoes(){

    const emailValido = validarEmail();
    document.getElementById("esqueceu_senha").disabled = !emailValido;

    const senhaValida = validarSenha();
    document.getElementById("btn-login").disabled = !emailValido || !senhaValida;


}


/*=======================================================================================*/
    /* Aqui valido um email com regex */
    /* achei no google: https://pt.linkedin.com/pulse/valida%C3%A7%C3%A3o-simples-de-e-mail-usando-express%C3%B5es-regulares-santos#:~:text=A%20fun%C3%A7%C3%A3o%20validateEmail%20%C3%A9%20definida,regular%20%5CS%2B%40%5CS%2B%5C. */
function emailOkay(email){
    return /\S+@\S+\.\S+/.test(email);

} 
