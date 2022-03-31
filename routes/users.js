import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send("User with the name ${user.firstName}added to the database!");
});

// /users/2 => req.params { is: 2}

router.get("/:id", (req, res) => {
  console.log(req.params);

  const foundUser = users.find((user) => user.id == id);

  res.send(foundUser);

  router.delete("/:id", (req, res) => {
    const { id } = req.params;

    // id to delete 123

    //Jhon 123
    //Jane 321

    users = users.filter((user) => user.id !== id);

    res.send("user with the id ${id) deleted from the database.");

    router.patch("/:id", (req, res) => {
      const { id } = req.params;

      const user = users.find((user) => user.id == id);

      if (firstName) user.firstName = firstName;
      if (lastName) user.lastName = lastName;
      if (age) user.age = age;
    });
  });
});
export default router;
