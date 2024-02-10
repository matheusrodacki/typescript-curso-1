import { View } from './view.js';

export class MensagemView extends View {
  private element: HTMLElement;
  template(mensagem: string): string {
    return `<p class="alert alert-info"> ${mensagem}</p>`;
  }
  update(model: string): void {
    this.elemento.innerHTML = this.template(model);
  }
}
