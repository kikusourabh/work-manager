const showroomController = require("../controller").showroom;

module.exports = (app) => {
  app.get("/create_showroom", showroomController.create);
};
