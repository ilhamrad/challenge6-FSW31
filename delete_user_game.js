const { user_game } = require("./models");

user_game
  .destroy({
    where: {
      id: 1,
    },
  })
  .then(() => {
    console.log("deleted data");
  });
