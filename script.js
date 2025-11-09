function ejercicio3(){
    let numero=parseFloat(prompt("Ingrese un número decimal: "));
    let redondeoHaciaAbajo=Math.floor(numero);
    let redondeoHaciaArriba=Math.ceil(numero);
    let redondeoNormal=Math.round(numero);
    alert(`Redondeo hacia abajo: ${redondeoHaciaAbajo}
        Redondeo hacia arriba: ${redondeoHaciaArriba}
        Redondeo normal: ${redondeoNormal}`);
}

function ejercicio4(){
    let max=parseInt(prompt("Ingrese el maximo: "));
    let min=parseInt(prompt("Ingresa el minimo: "));
    function numeroAleatorio(min,max){
        let rango=max-min;
        let numero=Math.round(Math.random()*rango+min);
        return numero;
    }
    alert(`El numero aleatorio entre ${min} y ${max} es ${numeroAleatorio(min,max)}`);
}

function ejercicio5(){
    function numeroAleatorio(min,max){
        let rango=max-min;
        let numero=Math.round(Math.random()*rango+min);
        return numero;
    }
    alert(`La suma de los dados es ${numeroAleatorio(1,6)+numeroAleatorio(1,6)}`);
}

function ejercicio6(){
    let numero=parseFloat(prompt("Ingrese un numero "));
    let cuadrado=Math.pow(numero, 2);
    let cubo=Math.pow(numero, 3);
    let raiz=Math.sqrt(numero);
    alert(`El cuadrado del numero es: ${cuadrado}
        El cubo del numero es: ${cubo}
        La razi cuadrada es: ${raiz}`);
}

function ejercicio7(){
    let pregunta = parseInt(prompt("Quieres convertir grados a radianes(1) o radianes a grados(2)?"));
    if (pregunta==1){
        let grados = prompt("Ingresa los grados: ");
        function gradosARadianes(grados){
            let radianes=grados*(Math.PI/180);
            return radianes;
        }
        alert(`Son ${gradosARadianes(grados)} radianes`);
    } else if (pregunta==2){
        let radianes = prompt("Ingresa los radianes: ");
        function radianesAGrados(radianes){
            let grados=radianes*(180/Math.PI);
            return grados;
        }
        alert(`Son ${radianesAGrados(radianes)} grados`);
    } else {
        alert("Ingresa 1 o 2");
    }
}

function ejercicio8() {
    function numeroAleatorio(min,max){
        let rango=max-min;
        let numero=Math.round(Math.random()*rango+min);
        return numero;
    }
    function generarContraseña(){
        let contraseña = "";
        for (let i=0; i<6; i++) {
            contraseña += numeroAleatorio(0, 9);
        }
        return contraseña
    }
    alert(`Contraseña generada: ${generarContraseña()}`);
}

function ejercicio9() {
    let x1 = parseFloat(prompt("Ingresa x1:"));
    let y1 = parseFloat(prompt("Ingresa y1:"));
    let x2 = parseFloat(prompt("Ingresa x2:"));
    let y2 = parseFloat(prompt("Ingresa y2:"));

    let distancia = Math.hypot(x2-x1, y2-y1);
    let distOrigen1 = Math.hypot(x1, y1);
    let distOrigen2 = Math.hypot(x2, y2);

    alert(`Distancia entre puntos: ${distancia}
        Suma distancias al origen: ${(distOrigen1 + distOrigen2)}`);
}

function ejercicio10() {
    let calificaciones = [];
    let pregunta = "";
    pregunta = prompt("Quieres añadir notas? (si/no)")

    while(pregunta==="si"){
        let nuevaNota = parseFloat(prompt("Agrega la nota: "));
        calificaciones.push(nuevaNota);

        pregunta = prompt("Quieres seguir agreandando notas? (si/no)");
    }

    let max = Math.max(...calificaciones);
    let calificacionesNormalizadas = [];

    for (let i=0; i<calificaciones.length; i++) {
        let notaActual = calificaciones[i];
        let resultado = notaActual/max;

        calificacionesNormalizadas.push(resultado);
    }

    alert(`Calificaiones: ${calificaciones}
        Calificaiones Normalixadas: ${calificacionesNormalizadas}`);
}

//Ejercicio 11 y 12
class Producto {
    #nombre;
    #precio;
    #stock;

    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get nombre() { return this.#nombre; }
    set nombre(valor) { this.#nombre = valor; }

    get precio() { return `$${this.#precio.toFixed(2)}`; }
    set precio(valor) {
        let num = Number(valor);
        if (!isNaN(num) && num > 0) {
            this.#precio = num;
        } else {
            alert("Precio inválido");
        }
    }
    
    get stock() { return this.#stock; }
    set stock(valor) {
        if (valor >= 0) {
            this.#stock = valor;
        } else {
            alert("Stock no puede ser negativo");
        }
    }
    
    vender(cantidad) {
        if (cantidad <= this.#stock) {
            this.#stock -= cantidad;
            alert(`Vendidos ${cantidad} unidades. Stock restante: ${this.#stock}`);
        } else {
            alert("Stock insuficiente");
        }
    }
}

function pruebaProducto() {
    let p = new Producto("Laptop", 1200.5, 10);
    alert(p.precio);
    p.precio = "1500";
    p.vender(3);
}

//Ejercicio 13
class Figura {
  area() { return 0; }
  perimetro() { return 0; }
}

class Cuadrado extends Figura {
  constructor(lado) {
    super();
    this.lado = lado;
  }
  area() { return this.lado * this.lado; }
  perimetro() { return 4 * this.lado; }
}

class Triangulo extends Figura {
  constructor(base, altura, lado2, lado3) {
    super();
    this.base = base;
    this.altura = altura;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }
  area() { return (this.base * this.altura) / 2; }
  perimetro() { return this.base + this.lado2 + this.lado3; }
}

function pruebaFiguras() {
  let c = new Cuadrado(5);
  let t = new Triangulo(6, 4, 5, 5);
  console.log("Cuadrado área:", c.area());
  console.log("Triángulo área:", t.area());
}

//Ejercicio 14 y 15
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
  mostrarInfo() {
    return `Nombre: ${this.nombre}, Email: ${this.email}`;
  }
}

class Cliente extends Usuario {
  constructor(nombre, email, nivelFidelidad) {
    super(nombre, email);
    this.nivelFidelidad = nivelFidelidad;
  }
  mostrarInfo() {
    return super.mostrarInfo() + `, Fidelidad: ${this.nivelFidelidad}/5`;
  }
}

class Administrador extends Usuario {
  constructor(nombre, email, permisos) {
    super(nombre, email);
    this.permisos = permisos;
  }
  mostrarInfo() {
    return super.mostrarInfo() + `, Permisos: ${this.permisos.join(", ")}`;
  }
}

function ejercicio15() {
  let usuarios = [
    new Cliente("Ana", "ana@mail.com", 4),
    new Administrador("Carlos", "carlos@empresa.com", ["crear", "editar", "eliminar"])
  ];

  usuarios.forEach(u => alert(u.mostrarInfo()));
}

//Ejercicio16
class Empleado {
  constructor(nombre, sueldoBase) {
    this.nombre = nombre;
    this.sueldoBase = sueldoBase;
  }
  calcularSueldo() {
    return this.sueldoBase;
  }
}

class Programador extends Empleado {
  constructor(nombre, sueldoBase, lenguaje) {
    super(nombre, sueldoBase);
    this.lenguaje = lenguaje;
  }
  calcularSueldo() {
    return super.calcularSueldo() * 1.10;
  }
}

class ProgramadorSenior extends Programador {
  calcularSueldo() {
    return super.calcularSueldo() * 1.13636;
  }
}

//Ejercicio17
class Cuenta {
  #saldo = 0;
  constructor() {}

  depositar(monto) {
    if (monto > 0) this.#saldo += monto;
  }
  retirar(monto) {
    if (monto <= this.#saldo) {
      this.#saldo -= monto;
      return true;
    }
    return false;
  }
  get saldo() { return this.#saldo; }
}

class CuentaAhorro extends Cuenta {
  retirar(monto) {
    if (super.retirar(monto)) return true;
    alert("Saldo insuficiente en cuenta de ahorro");
    return false;
  }
}

class CuentaCorriente extends Cuenta {
  #limiteSobregiro = 500;
  retirar(monto) {
    let disponible = this.saldo + this.#limiteSobregiro;
    if (monto <= disponible) {
      this.depositar(-monto); // simula retiro
      return true;
    }
    alert("Límite de sobregiro alcanzado");
    return false;
  }
}

//Ejercicio18
class Carrito {
  #productos = [];

  agregarProducto(producto) {
    this.#productos.push(producto);
  }

  calcularTotal() {
    return this.#productos.reduce((total, p) => total + Number(p.precio.slice(1)), 0);
  }

  mostrarResumen() {
    let resumen = this.#productos.map(p => `${p.nombre}: ${p.precio}`).join("\n");
    alert(resumen + "\n\nTOTAL: $" + this.calcularTotal().toFixed(2));
  }
}

//Ejercicio19
class Notificacion {
  enviar() {
    console.log("Enviando notificación genérica...");
  }
}

class Email extends Notificacion {
  enviar() { console.log("Enviando EMAIL"); }
}

class SMS extends Notificacion {
  enviar() { console.log("Enviando SMS"); }
}

class Push extends Notificacion {
  enviar() { console.log("Enviando PUSH"); }
}

function enviarNotificaciones(lista) {
  lista.forEach(n => n.enviar());
}