export class Order{
    constructor(
        public title: string,
        public quantity: number,
        public date: Date,
        public email: string,
    ) {}
}