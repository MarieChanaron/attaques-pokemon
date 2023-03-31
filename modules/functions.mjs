import { Pokemon } from "../classes/pokemon.js";
import { Attack } from "../classes/attack.js";

const attacks = [];
const pokemons = [];

// Helper functions

const makePokemon = (name, number, size, weight, type, lifePoints, attacks) => {
    const pokemon = new Pokemon(name, number, size, weight, type, lifePoints, attacks);
    pokemons.push(pokemon);
}

const makeAttack = (label, damage) => {
    const attack = new Attack(label, damage);
    attacks.push(attack);
}

const getAttack = attackName => {
    const attackObject = attacks.find(attack => attack.label === attackName);
    return attackObject;
}

const findParticipants = () => {
    const rand1 = Math.floor(Math.random() * pokemons.length);
    const pokemon1 = pokemons[rand1];
    const remainingPokemons = pokemons.filter(pok => pok !== pokemon1);
    const rand2 = Math.floor(Math.random() * remainingPokemons.length);
    const pokemon2 = remainingPokemons[rand2];
    return {pokemon1, pokemon2};
}

const displayAttackText = (player, damage) => {
    const container = document.getElementById('play');
    const p = document.createElement('p');
    p.innerText = `${player} a attaqué. Il a fait ${damage} de dégâts. `;
    container.appendChild(p);
}

const attack = (attacker, attacked) => {
    let attackType;
    if (attacker.remainingLifePoints <= attacker.lifePoints * 0.20) {
        attackType = attacker.attacks[1];
    } else {
        attackType = attacker.attacks[0];
    }
    attacker.attack(attacked, attackType);
    displayAttackText(attacker.name, attackType.damage);
}

const playAttackRounds = (pokemon1, pokemon2) => {
    do {
        attack(pokemon1, pokemon2);
        attack(pokemon2, pokemon1);
    } while (pokemon1.remainingLifePoints > 0 && pokemon2.remainingLifePoints > 0);
    const winner = pokemon1.remainingLifePoints > pokemon2.remainingLifePoints ? pokemon1 : pokemon2;
    return winner;
}

export {makeAttack, makePokemon, getAttack, playAttackRounds, findParticipants};