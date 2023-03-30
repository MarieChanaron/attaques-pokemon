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
    const randomNum = Math.floor(Math.random() * 2);
    const player1 = pokemons[randomNum];
    const player2 = pokemons[randomNum === 1 ? 0 : 1]
    return {player1, player2};
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

const playAttackRounds = (player1, player2) => {
    do {
        attack(player1, player2);
        attack(player2, player1);
    } while (player1.remainingLifePoints > 0 && player2.remainingLifePoints > 0);
    const winner = player1.remainingLifePoints > player2.remainingLifePoints ? player1 : player2;
    return winner;
}

export {makeAttack, makePokemon, getAttack, playAttackRounds, findParticipants};