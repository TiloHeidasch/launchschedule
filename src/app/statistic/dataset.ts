export class Dataset {
    readonly name: string;
    readonly value: number;
    readonly color: string;
    readonly colorLight: string
    constructor(name: string, value: number, color: string) {
        this.name = name;
        this.value = value;
        this.color = color;
        this.colorLight = this.color + "40";
    }
}