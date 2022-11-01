const { Router } = require('express');
const { Type } = require('../db');
const axios = require('axios');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const types = await axios.get("https://pokeapi.co/api/v2/type");
        const data = types.data.results;

        data.forEach(e => {
            Type.findOrCreate({ where: { name: e.name } })
        });

        const allType = await Type.findAll();
        res.status(201).send(allType)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;