const User = require("./User");

module.exports = {
  getUser(req, res) {
    User.findOne({ _id: req.params.id }).then(user => {
      return res.status(200).json(user);
    });
  },
  getUsers(req, res) {
    User.find()
      .then(users => {
        return res.status(200).json(users);
      })
      .catch(err => res.status(500).json(err));
  },
  addUser(req, res) {
    new User(req.body)
      .save()
      .then(user => {
        return res.status(200).json(user);
      })
      .catch(err => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      (err, user) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(user);
      }
    );
  },
  deleteUser(req, res) {
    User.findByIdAndRemove(req.params.id)
      .then(user => res.status(200).json(user))
      .catch(err => res.status(500).json(err));
  }
};
