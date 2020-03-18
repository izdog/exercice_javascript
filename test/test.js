import { getCharacterProperties, getCharacters } from '../js/Characters'
import assert from 'assert'

describe('Characters', function(){
    describe('getCharacterProperties', function(){
        it('Doit retourner les caractéristiques du personnage', function(){
            const charac = getCharacterProperties('female','berserk', 'clare')
            const expected = {
                life: 100,
                mana: 100,
                atk: 10,
                def: 5,
                str: 10,
                dex: 3,
                int: 10
            }
            assert.deepEqual(charac, expected)
        })

        it('Doit retourner null si les paramètres ne sont pas correctes', function(){
            const charac = getCharacterProperties('fdsf', 1, 100)
            assert.deepEqual(charac, null)
        })
    })
    describe('getCharacters()', function(){
        it('Doit retourner un tableau de personnages', function(){
            const characs = getCharacters('female', 'berserk')
            const expected = ['dolores', 'clare', 'ripley', 'garona']
            assert.deepEqual(characs, expected)
        })
        it('Doit retourner null si les paramètres ne sont pas correctes', function(){
            const characs = getCharacters('fds',1)
            assert.deepEqual(characs, null)
        })
    })
})