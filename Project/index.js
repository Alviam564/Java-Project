import pokemon from './pokemontcgsdk'

pokemon.configure({apiKey: '168a95bd-b753-4362-81c4-c8483249906d'})

pokemon.card.find('base1-151')
.then(card => {
    console.log(card.name)
})

pokemon.card.where({ q: 'name:()' })
.then(result => {
    console.log(result.data[0].name)
})

pokemon.set.find('base')
.then(set => {
    console.log(set.name)
})

pokemon.set.where({ q: 'series:base' })
.then(result => {
    console.log(result.data[0].name)
})