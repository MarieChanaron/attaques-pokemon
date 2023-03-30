# Classes

## Classe pokémon : 
Un Pokémon possède :
- un nom
- un numéro d'identification dans le Pokédex
- une taille
- un poids
- un type
- un certain nombre de points de vie
- deux attaques différentes qui peuvent infliger un certain nombre de points de dégâts

## Classe attaque : 
Composée de deux attributs :
- un libellé
- un nombre de dégâts

# Objets

A partir de ces deux classes, instancier deux Pokémons : 

Pikachu :
- numéro 025
- type électrique
- mesure 40 cm
- pèse 6 kg
- il a 82 points de vie
- ses deux attaques sont : statik (qui inflige 10 points de dégâts), paratonnerre (qui en inflige 25 points)

Evoli : 
- numéro 133
- type normal
- mesure 30 cm
- pèse 6.5 kg
- il a 70 points de vie
- ses deux attaques sont : adaptabilité (qui inflige 9 points de dégâts), anticipation (qui en inflige 15)

# Attaque

Ajouter une méthode attaque() dans la classe Pokemon. Celle-ci permet à un Pokémon d'en combattre un autre.

S'il n'y a plus que 20% de points de vie :
le Pokémon lance la deuxième attaque, plus puissante

Sinon, la première attaque est lancée :
(celle qui inflige le moins de dégâts) qui est lancée

# Combat

Organisez le combat des deux Pokémon Pikachu et Evoli.

Chaque pokémon attaque à tour de rôle. Un pokémon est KO lorsque son total de points de vie est inférieur à zéro. 
Le premier attaquant est décidé par tirage au sort.