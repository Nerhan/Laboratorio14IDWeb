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
        return numero ;
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
        La razi cuadrada es: ${raiz}`)
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
        alert("Ingresa 1 o 2")
    }

}