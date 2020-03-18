// import du module Characters
import { getCharacterProperties, getCharacters } from './Characters.js'

// Exemple d'utilisation (utiliser la console)
const personnages = getCharacters('female', 'berserk')
const properties = getCharacterProperties('female', 'berserk', 'dolores')

console.log(personnages, properties)