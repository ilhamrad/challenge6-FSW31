const { user_game } = require("./models");

user_game
  .create({
    id: "1",
    username: "ilhamrams",
    password: "sayaganteng"
  })
  .then((user_game) => {
    console.log(user_game);
  });
