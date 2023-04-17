const {user_game} = require('./models')

user_game.update({
    username: "ilhamsaja"
}, {where: {
    id: 1
}}
).then((user_game) => {
    console.log(user_game)
})