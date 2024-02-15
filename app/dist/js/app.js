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
const botaoImportar = document.querySelector('#botao-importar');
if (botaoImportar) {
    botaoImportar.addEventListener('click', () => {
        controller.importarDaddos();
    });
}
else {
    throw Error('Botao importar não encontrado.');
}
//# sourceMappingURL=app.js.map