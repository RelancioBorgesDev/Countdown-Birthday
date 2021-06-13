const tempoQueFalta = document.getElementById('tempo-falta');

const aniversario = new Date('04/26/2022');
console.log(aniversario)

//Milisegundos
const segundo = 1000;
const minuto = segundo * 60;
const hora = minuto * 60;
const dia = hora * 24;

let timerId

function countDown(){
    const hoje = new Date();
    const tempoFalta =  aniversario - hoje;

    if(tempoFalta <= -dia){
        tempoQueFalta.innerText = "Já Passou seu Aniversário"
        return
    }else if(tempoFalta <= 0 ){
        tempoQueFalta.innerHTML = "Feliz Aniversário"
        clearInterval(timerId)
        return
    }

    const dias = Math.floor(tempoFalta / dia);
    const horas = Math.floor((tempoFalta % dia) / hora);
    const minutos = Math.floor((tempoFalta % hora) / minuto);
    const segundos = Math.floor((tempoFalta % minuto) / segundo);

    tempoQueFalta.innerHTML = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
}

timerId = setInterval(countDown, segundo);

