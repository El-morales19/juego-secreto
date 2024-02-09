let numeroSecreto = 0;
let veces = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   

   if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Muy bien! Acertaste el número en ${veces} ${(veces === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento ('p','El número secreto es mayor');
        }
        veces++;
        limpiarCaja(); 
    }
   return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados)
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles, Ganaste!');
    }else{
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }  
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    veces = 1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el número aleatorio
    //Inicializar el numero de intentos
    //Deshabilitar el botón de nuevo juego
   condicionesIniciales();
    


}

condicionesIniciales();
