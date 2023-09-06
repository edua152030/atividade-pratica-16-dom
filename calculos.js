const elementoBase = document.getElementById('valor_base');
const elementoVlTransporte = document.getElementById('valor_transporte');
const elementoVlAlimentacao = document.getElementById('valor_alimentacao');
const elementoReceita = document.getElementById('valor_receita')

elementoBase.addEventListener("input", updateValor);
elementoVlTransporte.addEventListener("input", updateValor);
elementoVlAlimentacao.addEventListener("input", updateValor);

function updateValor() {
    const inputBase = Number(elementoBase.value)
    const inputVlTransporte = Number(elementoVlTransporte.value)
    const inputVlAlimentacao = Number(elementoVlAlimentacao.value)

    const totalReceita = inputBase + inputVlTransporte + inputVlAlimentacao

    elementoReceita.value = totalReceita
}


const elementoAutomovel = document.getElementById('valor_automovel')
const elementoFaltas = document.getElementById('faltas')
const elementoDesconto = document.getElementById('valor_descontos')

elementoAutomovel.addEventListener('input', updateDesc)
elementoFaltas.addEventListener('input', updateDesc)

function updateDesc(){
    const vlAutomovel = Number(elementoAutomovel.value)
    const vlFaltas =Number(elementoFaltas.value)

    const totalDesc = vlAutomovel + vlFaltas

    elementoDesconto.value =  totalDesc

}

const valorTotal = document.getElementById('valor_total')

function totalCalc(){
    valorTotal.value = elementoReceita.value - elementoDesconto.value
} 