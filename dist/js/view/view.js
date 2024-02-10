export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(mensagem) {
        throw new Error('Classe filha precisa implementar o método tamplate!');
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
