const nombre = prompt("Ingrese su nombre");
const puesto = prompt("Ingrese su puesto");
const añosTrabajados = parseInt(prompt("Ingrese los años trabajados"));

const aportesNecesarios = 30;
let resultado = 30 - añosTrabajados;

alert("Saludos " + nombre + ". Para jubilarte es necesario que cumplas con " + aportesNecesarios + " años de aportes en tu trabajo como " + puesto + ". En tu caso te faltan " + resultado + " años.");

console.log("Ejecuccion exitosa");