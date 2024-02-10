import { NegociacaoController } from './controller/negociacao-contoller.js';
import { NegocicoesView } from './view/negociacoes-view.js';

const controller = new NegociacaoController();

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  controller.adiciona();
});

//const negociacoesView = new NegocicoesView();
//const template = negociacoesView.template();
//
