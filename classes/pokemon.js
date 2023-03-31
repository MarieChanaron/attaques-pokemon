export class Pokemon {

    constructor(name, number, size, weight, type, lifePointsParam, attacks) {
        this._name = name;
        this._number = number;
        this._size = size;
        this._weight = weight;
        this._type = type;
        this._lifePoints = lifePointsParam;
        this._remainingLifePoints = lifePointsParam;
        this._attacks = attacks;
    }

    get name() {
        return this._name;
    }

    get lifePoints() {
        return this._lifePoints;
    }

    get remainingLifePoints() {
        return this._remainingLifePoints;
    }

    set remainingLifePoints(points) {
        this._remainingLifePoints = points;
    }

    get attacks() {
        return this._attacks;
    }

    attack(pokemonName, attackName) {
        const damage = attackName.damage;
        pokemonName.remainingLifePoints -= damage;
    }

}