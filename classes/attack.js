export class Attack {

    constructor(label, damage) {
        this._label = label;
        this._damage = damage;
    }

    get damage() {
        return this._damage;
    }

    get label() {
        return this._label;
    }

}