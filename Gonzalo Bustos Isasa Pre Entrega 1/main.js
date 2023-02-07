alert("Bienvenidos Al Himalaya")
const usuarioAutorizado = "Mike wasoski"
const contraseñaAutorizada = "sullyvankenobi"

let usuario = prompt ("Si quiere heladito me diga quien es")
let contraseña = prompt ("Si sos vo entonces sabes la contraseña...")


if (usuario === usuarioAutorizado && contraseña === contraseñaAutorizada) {
    alert (usuario + " so vo!");

    let cantidadHeladitos = parseInt (prompt ("¿Cuantos heladitos vas a llevar hoy?"));
    const precioHeladito = 300;
   
    for (let i = 0; i < cantidadHeladitos; i++) {
        let saborHeladito =  prompt("¿De que sabor?");
        };
        let cuenta = sumarPrecios (cantidadHeladitos,precioHeladito)
        alert("Por tus " + cantidadHeladitos + " heladitos tenes que pagar " + cuenta + " pesos.");
        let pago = prompt("¿Con cuanto pagas Mike?"); {
        if (pago == cuenta) {alert("Toma tu heladito Mike nos vemo la prosima")}
        let vuelto = diferenciaCuenta (pago,cuenta) 
        if (pago > cuenta) {alert (vuelto + " es tu vuelto Mike, que disfrute el heladito.")}
        
        if (pago < cuenta) {alert ("No seas raton Mike! Así no hay heladito.")}} 
    }

        else{alert("No te conozco no te vendo heladito")}

function sumarPrecios(cantidadHeladitos,precioHeladito){
    let cuenta = (cantidadHeladitos*precioHeladito);
    return cuenta}
function diferenciaCuenta (pago,cuenta){
    let vuelto = (pago-cuenta)
    return vuelto
}
