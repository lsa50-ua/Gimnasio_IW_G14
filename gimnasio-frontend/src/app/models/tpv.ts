export class TPV {
    amount: number;
    currency: string;
    description: string;
    reference: string;
    url_callback: string;

    constructor(amount: number) {
        this.amount = amount;
        this.currency = 'EUR';
        this.description = 'Recarga de saldo';
        this.reference = this.getRandomInt(9999999) + 'PowerHouse' + this.getRandomInt(9999999);
        this.url_callback = `http://localhost:4200/saldo/recargar/${this.amount}`;
    }

    getRandomInt(max: number) {
        return Math.floor(Math.random() * max).toString();
    }
}