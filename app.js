import {makeAttack, makePokemon, getAttack, playAttackRounds, findParticipants} from './modules/functions.mjs';

const playGame = () => {

    // Instantiate attacks and save them to the attacks array
    makeAttack('statik', 10);
    makeAttack('paratonnerre', 25);
    makeAttack('adaptabilite', 9);
    makeAttack('anticipation', 15);

    // Instantiate pokemons and save them to the pokemons array
    makePokemon('Pikachu', 25, 'electric', 40, 6, 82, [getAttack('statik'), getAttack('paratonnerre')]);
    makePokemon('Evoli', 133, 'normal', 30, 6.5, 70, [getAttack('adaptabilite'), getAttack('anticipation')]);

    // Find first player and second player
    const {pokemon1, pokemon2} = findParticipants();

    // Display names in the title
    document.querySelector('h1 span:first-child').innerText = pokemon1.name;
    document.querySelector('h1 span:last-child').innerText = pokemon2.name;

    // Display first player name
    document.querySelector('#first span').innerText = pokemon1.name;

    // Display each player and his points
    document.querySelector('#points #player-one span:first-child').innerText = pokemon1.name;
    document.querySelector('#points #player-one span:last-child').innerText = pokemon1.lifePoints;
    document.querySelector('#points #player-two span:first-child').innerText = pokemon2.name;
    document.querySelector('#points #player-two span:last-child').innerText = pokemon2.lifePoints;

    // Make the 2 pokemons fight against each other
    const winner = playAttackRounds(pokemon1, pokemon2);

    // Display winner
    document.querySelector('#winner span:first-child').innerText = winner.name;
    document.querySelector('#winner span:last-child').innerText = winner.remainingLifePoints;
}

playGame();