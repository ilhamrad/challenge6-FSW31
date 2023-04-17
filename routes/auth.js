const { response } = require('express');
const express = require('express');
const router = express.Router();
const app = express();
const userId = require('./function')


router.get('/login', (request, response) => {
    response.status(200).render('login')
})


router.post('/login', userId)





module.exports = router