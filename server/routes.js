const {
  getUser,
  getUsers,
  addUser,
  updateUser,
  deleteUser
} = require("./controllers/User/UserCtrl");

module.exports = app => {
  app.get("/api/users/:id", getUser);
  app.get("/api/users", getUsers);
  app.post("/api/users", addUser);
  app.put("/api/users/:id", updateUser);
  app.delete("/api/users/:id", deleteUser);
};
