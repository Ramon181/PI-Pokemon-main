const { Router } = require('express');
const axios = require('axios');
const { Pokemon, Type } = require('../db.js')


const router = Router();

const allPokemons = async () => {
    const api = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40");
    const url = api.data.results.map((el) => axios.get(el.url))
    const getApi = await Promise.all(url);
    const pokemonesApi = getApi.map((e) => {
        return {
            id: e.data.id,
            name: e.data.name,
            attack: e.data.stats[1].base_stat,
            image: e.data.sprites.other["official-artwork"].front_default,
            types: e.data.types.map((el) => {
                return{
                    name:el.type.name
                }
            }),
        };
    });
    const pokemonesDb = await Pokemon.findAll({
          include: {
            model: Type,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
          attributes: ["id", "name", "image", "attack", "createInDb"],
    })
    const getAllPokemons = [...pokemonesApi, ...pokemonesDb]
    return getAllPokemons
}



router.get('/', async (req, res) => {
    try {
        const name = req.query.name || ''
        const pokemons = await allPokemons();
        if (name) {
            const pokemon = pokemons.filter(r => r.name.toLowerCase().includes(name.toLowerCase()));
            res.status(200).send(pokemon)
        } else {
            res.status(200).send(pokemons)
        }
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (typeof id === 'string' && id.length > 8) {
            const pokemonDb = await Pokemon.findByPk(id, { include: Type });
            res.status(200).send(pokemonDb);
        } else {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const pokemonApi = {
                id: data.id,
                name: data.name,
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
                height: data.height,
                weight: data.weight,
                image: data.sprites.other["official-artwork"].front_default,
                types: data.types.map((el) => {
                    return{
                        name:el.type.name
                    }
                })
            };
            res.status(200).send(pokemonApi)
        }
    } catch (error) {
        console.log(error)
    }
});


router.post('/', async (req, res) => {
    try {
        const {name,hp,attack,defense,speed,height,weight,image,types} = req.body;
        if (name) {
            const postPokemon = await Pokemon.create({
                name,hp,attack,defense,speed,height,weight,image
            });
            const type = await Type.findAll({
                where:{name:types}
            });
            postPokemon.addType(type);
            res.status(200).send(postPokemon)
        }
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;