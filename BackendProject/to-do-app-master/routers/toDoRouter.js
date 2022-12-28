const router = require("express")();
const HttpStatusCode = require("http-status-codes");
//const { urlShortingValidator } = require("../middleware/validators");
const ControllerFactory = require("../controllers/controllerFactory");
const nodemailer = require('nodemailer')

const toDoController = ControllerFactory.creating(
  "toDoController"
);
const userController = ControllerFactory.creating(
  "userController"
);
// !!!!!!!!!!!!! fiil yerine isim yapılacak urlleri
/*
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ayberkkerman2@gmail.com',
    pass: 'drlovidjeemfpnyf'
  }
})

let mailOptions={
  from: 'ayberkkerman2@gmail.com',
  to: ' ayberkkerman2@gmail.com',
  subject: 'Nodemailer Test',
  text: "Deneme"
}
transporter.sendMail(mailOptions,(err,data)=>{
  if(err) console.log(err)
  else console.log("mail gönderildi");
})
*/
router.get("/api/mail/:userEmail", async (req, res) => {
    
  try {
    const response = await userController.generateVerificationCode();
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ayberkkerman2@gmail.com',
        pass: 'drlovidjeemfpnyf'
      }
    })
      
    let mailOptions={
      from: 'ayberkkerman2@gmail.com',
      to: req.params.userEmail,
      subject: 'Change Password Verification Code',
      text: "Verification Code: " + response
    }
    transporter.sendMail(mailOptions,(err,data)=>{
      if(err) console.log(err)
      else console.log("mail gönderildi");
    })

    res.json(response);
  } catch (err) {
      res
      .status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR)
      .send(err.message);
  }
});


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

router.delete(
  "/api/user/:id",
  //urlShortingValidator.insert,
  async (req, res) => {
    try {
      const response = await userController.deleteEditor(req.params.id);
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


router.put(
  "/api/user-password",
  //urlShortingValidator.decode,
  async (req, res) => {
    try {
      const response = await userController.changePassword(
        req.body.userEmail,req.body.Password
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
  "/api/user",
  //urlShortingValidator.insert,
  async (req, res) => {
    try {
      const response = await userController.createUser(req.body);
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
        
        const response = await userController.checkUserExist(req.params.userEmail,req.params.userPassword);
        res.json(response);
    } catch (err) {
        res
        .status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send(err.message);
    }
});

router.get("/api/editor", async (req, res) => {
    
  try {
      
      const response = await userController.getEditor();
      res.json(response);
  } catch (err) {
      res
      .status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR)
      .send(err.message);
  }
});

router.get("/api/user", async (req, res) => {
    
  try {
    const response = await userController.getUser();
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