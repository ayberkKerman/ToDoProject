const joi = require("joi");
const HttpStatusCode = require("http-status-codes");

class toDoValidator {
  constructor() {}

  static async isEmailValid(req, res, next) {
    try {
      await joi
        .object({
          userEmail: joi.string().max(34).email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
          }).required(),
        })
        .validateAsync(req.params);
      next();
    } catch (error) {
      res.status(HttpStatusCode.EXPECTATION_FAILED).send(error.message);
    }
  }
  static async isIdAndToDoValid(req, res, next) {
    try {
      await joi
        .object({
          id: joi.number().required(),
          toDo: joi.object({
            IsCompleted: joi.boolean().required(),
            Title: joi.string().max(30).required(),
            CreateDate: joi.date().required(),
            Detail: joi.string().required(),
            Priority:joi.string().required(),
            UserId: joi.number().required(),
            Id:joi.number().required(),
          })
        })
        .validateAsync(req.body);
      next();
    } catch (error) {
      res.status(HttpStatusCode.EXPECTATION_FAILED).send(error.message);
    }
  }
  static async isToDoValid(req, res, next) {
    try {
      await joi
        .object({
          isCompleted: joi.boolean().required(),
          title: joi.string().max(30).required(),
          createDate: joi.date().required(),
          detail: joi.string().required(),
          priority:joi.string().required(),
          userId: joi.number().required(),
        })
        .validateAsync(req.body);
      next();
    } catch (error) {
      res.status(HttpStatusCode.EXPECTATION_FAILED).send(error.message);
    }
  }
  static async isValidId(req, res, next) {
    try {
      await joi
        .object({
          id: joi.number().required(),
        })
        .validateAsync(req.params);
      next();
    } catch (error) {
      res.status(HttpStatusCode.EXPECTATION_FAILED).send(error.message);
    }
  }
  static async isEmailAndPasswordValidBody(req, res, next) {
    try {
      await joi
        .object({
          userEmail: joi.string().max(34).email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
          }).required(),
          Password: joi.string().min(6).max(24).required(),
          ConfirmPassword: joi.string().min(6).max(24).required(),
        })
        .validateAsync(req.body);
      next();
    } catch (error) {
      res.status(HttpStatusCode.EXPECTATION_FAILED).send(error.message);
    }
  }
  static async isEmailAndPasswordValid(req, res, next) {
    try {
      await joi
        .object({
          userEmail: joi.string().max(34).email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
          }).required(),
          userPassword: joi.string().min(6).max(24).required(),
        })
        .validateAsync(req.params);
      next();
    } catch (error) {
      res.status(HttpStatusCode.EXPECTATION_FAILED).send(error.message);
    }
  }

  static async isUserValid(req, res, next) {
    try {
      await joi
        .object({
          userEmail: joi.string().max(34).email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
          }).required(),
          userPassword: joi.string().min(6).max(24).required(),
          userRole: joi.string().required,
        })
        .validateAsync(req.body);
      next();
    } catch (error) {
      res.status(HttpStatusCode.EXPECTATION_FAILED).send(error.message);
    }
  }

 
  
}

module.exports = toDoValidator;