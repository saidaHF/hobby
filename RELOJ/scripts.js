function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }
   
    document.getElementById("tiempo").innerHTML = hours + ":" + mins + ":" + secs;

    setInterval(printTime, 1000); //para cada segundo 1000
}
printTime();
// Ponemos setInterval() dentro de la función para que el reloj no tarde 1 seg en empezar
// Ponermos fuera printTime() para que lo haga la primera vez


