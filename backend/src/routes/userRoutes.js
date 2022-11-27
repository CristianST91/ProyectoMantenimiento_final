const express = require("express");
const userSchema = require("../models/userModel");

const router = express.Router();

// rutes
router.get('/', (req, res) => {
  res.send('Welcome to my API');
});

// create user
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// Login
let LOG

router.post("/login", async (req, res) => {
  let datos = req.body;
  const { team, userName, password } = datos;
  let userbd = await userSchema.findOne({ userName }); 
  //userbd = JSON.stringify(userbd);
  console.log(datos);
  console.log(JSON.stringify(userbd));
  try {
    if (
      userbd.userName == userName &&
      userbd.team == team &&
      userbd.password == password)  {
        LOG = {
          userName: userbd.userName,
          name: userbd.name,
          lastName: userbd.lastName,
          team: userbd.team,
          teamAdmin: userbd.teamAdmin
        }
      } 
  } catch (error) {
    LOG ='Datos incorrectos'
  }

});

router.get('/login', (req, res) => {
  res.send(LOG);
});

module.exports = router;
