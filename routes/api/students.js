const router = require("express").Router();
//Update the controller below 
const studentController = require("../../controllers/studentController");

// Matches with "/api/books"
router.route("/team")
  .get(studentController.findAll)
  .post(studentController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(studentController.findById)
  .put(studentController.update)
  .delete(studentController.remove);

module.exports = router;
