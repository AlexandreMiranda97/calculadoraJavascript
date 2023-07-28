function insert (num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean () {
    document.getElementById('resultado').innerHTML = "";
}

function backspace () {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calc () {
    var calculo = document.getElementById('resultado').innerHTML;
    if (calculo) {
        document.getElementById('resultado').innerHTML = eval (calculo);
    }
    else {
        document.getElementById('resultado').innerHTML = "0";
    }
}