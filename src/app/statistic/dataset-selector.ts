import { uuid } from 'uuidv4';
import { Md5 } from 'ts-md5/dist/md5';


export class DatasetSelector {
    private id: string;
    private name: string;
    private type: string;
    private search: string;
    private color: string;

    constructor() {
        this.id = uuid();
        this.name = ' Something';
        this.type = '';
        this.search = '';
        this.generateColor();
    }

    getId() {
        return this.id;
    }
    setName(name) {
        this.name = name;
        this.generateColor();
    }
    getName() {
        return this.name;
    }
    setType(type) {
        this.type = type;
        this.generateColor();
    }
    getType() {
        return this.type;
    }
    setSearch(search) {
        this.search = search;
        this.generateColor();
    }
    getSearch() {
        return this.search;
    }
    getColor() {
        return this.color;
    }
    private generateColor() {
        const md5 = new Md5();
        md5.appendStr(this.name === undefined ? '' : this.name).appendStr(this.type === undefined ? '' : this.type).appendStr(this.search === undefined ? '' : this.search);
        console.log(md5.end());
        this.color = '#' + md5.end().toString().toUpperCase().substr(0, 6);
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