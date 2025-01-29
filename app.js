let amigo = [];

function adicionarAmigo(){
    let nomeDigitado = document.querySelector('input').value;
    if (nomeDigitado == ''){
        alert ('Por favor, insira um nome válido!');
        return;
    }
    if (amigo.includes(nomeDigitado)){
        alert ('Este amigo já foi adicionado.');
        return;
    }

    amigo.push(nomeDigitado);
    document.querySelector('input').value ='';

    let listaNomes = '';
    let contador = 0;
    while (contador < amigo.length){
        listaNomes += `<li>${amigo[contador]}</li>`;
        contador++;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = listaNomes;
}

function sortearAmigo(){
    if (amigo.length === 0) {
        alert ('Quantidade de nomes inválida, insira mais.');
    } else {
        let sorteio = Math.floor(Math.random() * amigo.length);
        let nomeSorteado = amigo[sorteio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo sorteado é: ${nomeSorteado}`;
    }
}