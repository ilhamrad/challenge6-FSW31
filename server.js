const express = require("express");
const app = express();
const port = 3000;
const {user_game} = require ('./models')
const authRouter = require('./routes/auth.js')


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded())

//api untuk read
app.get("/users", (req, res) =>{
  user_game.findAll().then((user_game) => {
    res.json(user_game)
  })
})

//api untuk create
app.post('/createuser', (req,res) => {
  user_game.create({
    username: req.body.username,
    password: req.body.password
  })
  .then((user_game) => {
    res.status(200).json(user_game)
  }).catch((err) => {
    res.status(400).json("data failed to create")
  })
})

//api untuk update
app.put("/update/:id", (req, res) => {
  user_game.update({
    username: req.body.username,
    password: req.body.password
  }, {
    where: { id: req.params.id}
  }).then((user_game) => {
    res.status(200).json(user_game)
  }).catch((err) => {
    res.status(400).json("create failed")
  })
})


//api untuk delete
app.delete("/delete/:id", async(req, res) => {
  const id = req.params.id
  const user_game = await user_game.destroy({
    where: {
      id: id
    }
  })
  res.json({
    message: 'deleted article'
  })
})


//routing home
app.get("/", (req, res) => {
  res.render("home")
});


//routing gameplay
app.get("/gameplay", (req, res) => {
  res.status(200).render("gameplay")
});

//routing login
app.use(authRouter)


app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
