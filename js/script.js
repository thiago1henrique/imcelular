var $calcular = document.getElementById('botao');

function imc (){
    var $nome = document.getElementById('nome').value;
    var $peso = document.getElementById('peso').value;
    var $altura = document.getElementById('altura').value; 
    var $resultado = document.getElementById('result');

    $peso.replace (',','.');
    $peso.replace (',','.');
    $altura = parseFloat($altura);
    $peso = parseFloat($peso);

    var $calculo = ($peso / ($altura*$altura));
    var final = Math.round($calculo)

    if(final >= 18 && final <24){
        $resultado.textContent = ('Olá ' + $nome + '. Seu IMC é de: ' + final + '. Você tem: Peso ideal.')
    }if(final >= 24 && final < 29){
        $resultado.textContent = ('Olá ' +$nome + '. Seu IMC é de: ' +final + '. Você tem: Sobrepeso.')
    }if(final >= 30){
        $resultado.textContent = ('Olá ' +$nome + '. Seu IMC é de: ' +final + '. Você tem: Obesidade.')
    }if(final < 18){
        $resultado.textContent = ('Olá ' +$nome + '. Seu IMC é de: ' +final + '. Você tem: Magreza.')
    }
}

$calcular.addEventListener('click', imc);