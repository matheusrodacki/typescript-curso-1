import { NegociacaoController } from './controller/negociacao-contoller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível iniicializar a aplicação. Verifique se o form está sendo carregado.');
}
