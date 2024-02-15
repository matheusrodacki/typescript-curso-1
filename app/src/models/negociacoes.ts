import { Imprimivel } from '../services/imprimivel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Imprimivel {
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
