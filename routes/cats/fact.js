const express = require('express')
const fetch = require('node-fetch')
const router = express.Router();

router.get('/fact', async (req, res) =>{
    try {
        const response = await fetch('https://catfact.ninja/fact')
        const catFact = await response.json()
        res.json(catFact)
    } catch (error) {
        console.error(error)
        res.status(500).send('error getting cat fact')
    }
})

module.exports = router