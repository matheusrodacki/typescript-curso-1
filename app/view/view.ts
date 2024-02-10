export class View {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  //update(model: Negociacoes): void {
  //  this.elemento.innerHTML = this.template(model);
  //}
}
