const button = document.getElementById('botao');
const buttonReturn = document.getElementById('voltar')
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado'); 
const areaDeResposta = document.getElementById('resposta')
const nomeResposta = document.getElementById('name-text')
const resultadoImc = document.getElementById('valor-imc')
const condicaoDoUsuario = document.getElementById('user-status')
const areaDoForm = document.getElementById('form-container')


const resultInText = (imc) => {
    if(imc > 40) return 'Obesidade grau III';
    if(imc > 35) return 'Obesidade grau II';
    if(imc > 30) return 'Obesidade grau I';
    if(imc > 25) return 'Levemente acima do peso';
    if(imc > 18.5) return 'Peso ideial';
    return 'Abaixo do peso';
};

const imcCalc = () => {
    const alturaValue = +altura.value;
    const pesoValue = +peso.value;
    
    if(!peso.value || !altura.value || !nome.value) return resultado.textContent = 'Preencha todos os campos.';
    if (alturaValue <= 0) return resultado.textContent = 'A altura deve ser maior que zero';
    if(pesoValue <= 0) return resultado.textContent = 'O peso deve ser maior que zero'
    
    const valorImc = (pesoValue / (alturaValue * alturaValue)).toFixed(2);

    nomeResposta.textContent = `${nome.value}`
    resultadoImc.textContent = `Seu IMC é: ${valorImc}`
    condicaoDoUsuario.textContent = resultInText(valorImc)
    areaDoForm.style.display = 'none'
    areaDeResposta.style.display = 'flex'
};

const voltarForm = () => {
    nome.value = '';
    peso.value = '';
    altura.value = '';
    resultado.textContent = '';
    areaDoForm.style.display = 'flex'
    areaDeResposta.style.display = 'none'
}

button.addEventListener('click', imcCalc);
buttonReturn.addEventListener('click', voltarForm);
