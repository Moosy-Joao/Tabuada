// Selecionar elementos
const multiplicationForm = document.querySelector('#multiplication-form');
const numberInput = document.querySelector('#number');
const multiplicationInput = document.querySelector('#multiplicator');

const multiplicationTitle = document.querySelector('.multiplication-title span');
const multiplicationTable = document.querySelector('#multiplication-operations');

// Função para criar a tabuada usando DOMParser
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    const parser = new DOMParser();

    for (let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `
            <div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>
        `;

        // Parse o template para um documento HTML
        const doc = parser.parseFromString(template, 'text/html');
        const row = doc.body.firstElementChild;

        // Adiciona o elemento criado ao container
        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
};

// Evento do formulário
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) {
        multiplicationTable.innerHTML = `<p>Informe um número para calcular uma tabuada...</p>`;
        multiplicationTitle.innerText = "";
        return;
    }

    createTable(multiplicationNumber, multiplicatorNumber);
});