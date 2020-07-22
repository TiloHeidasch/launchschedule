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
        this.name = 'Something';
        this.type = '';
        this.search = '';
        this.generateColor();
    }

    getId() {
        return this.id;
    }

    private generateDatasetSelectorName() {
        let name = 'Something';
        if (this.getType() !== undefined && this.getType() !== '') {
            name = this.getType();
        }
        if (this.getSearch() !== undefined && this.getSearch() !== '') {
            name += ' named \'' + this.getSearch() + '\'';
        }
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setType(type) {
        this.type = type;
        this.generateDatasetSelectorName();
        this.generateColor();
    }
    getType() {
        return this.type;
    }
    setSearch(search) {
        this.search = search;
        this.generateDatasetSelectorName();
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
}