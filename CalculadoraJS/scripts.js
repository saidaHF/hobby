// Variable global que guarda el numero actual visible en pantalla
var numeroActual = '';
// Variable global que guarda el numero de la primera parte de la operacion
var numeroOperador = '';
// Variable global que guarda el signo de la operacion
var operando = '';

function escribirCaracter(caracter) {
    // Esta linea concatena lo que llega por el parametro 'caracter' a la variable numeroActual, es lo mismo que 'numeroActual = numeroActual + caracter;'
    numeroActual += caracter;
    // Escribimos el resultado enviando numeroActual
    escribirResultado(numeroActual);
}

function borrar() {
    // Asignamos a numeroActual un '0'
    numeroActual = '0';
    // Escribimos el resultado enviando un '0' para reiniciar el resultado
    escribirResultado('0');
}

function atras() {
    // Funcion que elimina el último caracter de una cadena de texto, por ejemplo de la cadena "Hola que tal?" nos devuelve "Hola que tal" ya que el 0
    // que le enviamos por el parametro 1 dice el inicio, y el -1 que le enviamos por el parametro 2 dice el fin
    // Más info: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/slice
    numeroActual = numeroActual.slice(0, -1);
    // Actualizamos el resultado
    escribirResultado(numeroActual);
}

function contrario() {
    // Asignamos a numeroActual el mismo numero multiplicado por -1, es lo mismo que: numeroActual = numeroActual * -1;
    numeroActual *= -1;
    // Actualizamos el resultado
    escribirResultado(numeroActual);
}

function escribirResultado(valor) {
    // Recogemos el elemento resultado y le ponemos lo que nos llega por el parametro 'valor'
    document.getElementById("resultado").innerHTML = valor;
}

function operar(signo) {
    // Asignamos a numeroOperador lo que tenemos actualmente visible
    numeroOperador = numeroActual;
    // Reiniciamos numeroActual para empezar la segunda parte de la operacion
    numeroActual = '';
    // Asignamos al operando el signo que nos llega por parametro
    operando = signo;
}

function calcularResultado() {
    // Usamos eval para evaluar la operacion, por ejemplo: '5 + 5' y nos devuelve el resultado que se lo enviamos a la funcion escribirResultado, es lo mismo
    // que lo siguiente:
    // var resultado = eval(numeroOperador + operando + numeroActual);
    // escribirResultado(resultado);
    // Más info: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/eval
    escribirResultado(eval(numeroOperador + operando + numeroActual));
}