const form = document.getElementById(`form-atividade`);
const atividades = [];
const notas = [];
const spanAprovado= `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado= `<span class="resultado reprovado">Reprovado</span>`;

let linhas = ``;


function atualizaTabela(){
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;
}

form.addEventListener(`submit`, function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById(`nome-atividade`);
    const inputNotaAtividade = document.getElementById(`nota-atividade`);

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`O número: ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = `<tr>`;
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha+= `</tr>`;
    
        linhas += linha;
    }

    inputNomeAtividade.value =``;
    inputNotaAtividade.value =``;
}



