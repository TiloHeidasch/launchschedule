import { uuid } from 'uuidv4';

export class DatasetSelector {
    readonly id: string;
    name: string;
    type: string;
    search: string;
    readonly color: string;

    constructor() {
        this.id = uuid();
        this.color = this.randColor();
    }

    private randColor() {
        const chars = "ABCDEF0123456789";
        const size = chars.length;
        const str = [];
        let color = '#';
        for (let j = 0; j < 6; j++) {
            color += chars[this.randbetween(0, size - 1)];
        }
        return color;
    }

    private randbetween(lower, upper) {
        return Math.floor(Math.random() * upper) + lower;
    }
}