
const userRegister = require("../database/datausers.json");

const userId = (request, response) => {
    const email = request.body.email;
    const password = request.body.password;
  
    const authUsers = userRegister.find(
      (index) => index.email == email && index.password == password
    );
  
    if (authUsers) {
      response
        .status(200)
        .json({ status: 200, message: "welcome back", data: authUsers });
    } else {
      response
      .status(400)
      .json({
        status: 400, message:
          "login failed"
      });
    };
};


  module.exports = userId
  

  