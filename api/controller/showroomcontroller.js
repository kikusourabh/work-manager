const showroom = require("../models").showroom;

module.exports = {
  create(req, res) {
    return showroom
      .create({ name: "radhe jwellers" })
      .then((showroom) => res.status(201).send(showroom))
      .catch((error) => res.status(400).send(error));
  },
};
