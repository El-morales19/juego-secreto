let numeroSecreto = 0;
let veces = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let vidas = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   console.log(vidas);

   if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Muy bien! Acertaste el número en ${veces} ${(veces === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        vidas++;
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            vidas--;
            asignarTextoElemento('p',`El número secreto es menor`);
        } else {
            vidas--;
            asignarTextoElemento ('p','El número secreto es mayor');

        }
        veces++;
        limpiarCaja(); 
    }

    if (vidas < 1){
        asignarTextoElemento('p', 'Te has quedado sin vidas, Perdiste!');
        document.getElementById('reiniciar').removeAttribute('disabled');
        vidas = 3
    } else{
        return;
    }
   return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);

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
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}, Vidas restantes: ${vidas}`);
    numeroSecreto = generarNumeroSecreto();
    veces = 1;
    vidas = 3;
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
