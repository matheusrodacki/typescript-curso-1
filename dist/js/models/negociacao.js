export class Negociacao {
    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }
    #data;
    #quantidade;
    #valor;
    get data() {
        return this.#data;
    }
    get quantidade() {
        return this.#quantidade;
    }
    get valor() {
        return this.#valor;
    }
    get volume() {
        return this.#quantidade * this.#valor;
    }
}