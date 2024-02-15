import { Imprimivel } from '../services/imprimivel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes extends Imprimivel {
  private negociacoes: Array<Negociacao> = [];

  public adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }
  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }
}
