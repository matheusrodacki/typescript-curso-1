export class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }
  template(mensagem: T): string {
    throw new Error('Classe filha precisa implementar o método tamplate!');
  }

  update(model: T): void {
    this.elemento.innerHTML = this.template(model);
  }
}
