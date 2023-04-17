const {user_game} = require('./models')

user_game.findAll().then((user_game) => {
    console.log(user_game)
})

user_game.findOne({
    where: { 
        id: 1
    }
}).then((user_game) => {
    console.log(user_game)
})