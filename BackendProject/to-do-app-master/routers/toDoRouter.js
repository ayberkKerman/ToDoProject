const router = require("express")();
const HttpStatusCode = require("http-status-codes");
//const { urlShortingValidator } = require("../middleware/validators");
const ControllerFactory = require("../controllers/controllerFactory");
const toDoController = ControllerFactory.creating(
  "toDoController"
);



router.put(
  "/api/to-does/change",
  //urlShortingValidator.decode,
  async (req, res) => {
    try {
      const response = await toDoController.changeToDo(
        req.body.id,req.body.toDo
      );

      if (!response)
        res
          .status(HttpStatusCode.NOT_FOUND)
          .send("There was no such a thousand code in the system!");

      res.json(response);
    } catch (err) {
      res
        .status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send(err.message);
    }
  }
);


router.post(
  "/Create",
  //urlShortingValidator.insert,
  async (req, res) => {
    try {
      const response = await toDoController.createToDo(req.body);
      res.json(response);
    } catch (err) {
      res
        .status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send(err.message);
    }
  }
);


router.delete(
  "/api/delete/:id",
  //urlShortingValidator.insert,
  async (req, res) => {
    try {
      const response = await toDoController.deleteToDo(req.params.id);
      res.json(response);
    } catch (err) {
      res
        .status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send(err.message);
    }
  }
);

router.put(
  "/api/to-does/change-Is-Completed",
  //urlShortingValidator.decode,
  async (req, res) => {
    try {
      const response = await toDoController.changeIsCompleted(
        req.body.id,req.body.toDo
      );

      if (!response)
        res
          .status(HttpStatusCode.NOT_FOUND)
          .send("There was no such a thousand code in the system!");

      res.json(response);
    } catch (err) {
      res
        .status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send(err.message);
    }
  }
);

router.get("/api/user/:userEmail/:userPassword", async (req, res) => {
    
    try {
        
        const response = await toDoController.checkUserExist(req.params.userEmail,req.params.userPassword);
        res.json(response);
    } catch (err) {
        res
        .status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send(err.message);
    }
});

router.get("/api/to-does/:id", async (req, res) => {
    try {
        const response = await toDoController.getAsync(req.params.id);
        res.json(response);
    } catch (err) {
        res
        .status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send(err.message);
    }
});

router.get("/api/to-do/detail/:id", async (req, res) => {
  try {
      const response = await toDoController.getAsyncDetail(req.params.id);
      res.json(response);
  } catch (err) {
      res
      .status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR)
      .send(err.message);
  }
});

module.exports = router;