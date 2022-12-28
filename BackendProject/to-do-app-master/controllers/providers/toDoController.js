const HttpStatusCode = require("http-status-codes");
const TransactionFactory = require("../../database/transactionFactory");
const { random } = require("../../utils");
const toDoTransactions = TransactionFactory.creating(
  "toDoTransactions"
);


class ToDoRouter {
  async changeToDo(id,toDo){
    toDoTransactions.changeToDo(id,toDo);

  }
  async deleteToDo(id){
    toDoTransactions.deleteToDo(id);

  }
  async createToDo(toDo){
    toDoTransactions.createToDo(toDo);

  }

  async changeIsCompleted(id,toDo){
    toDoTransactions.changeIsCompleted(id,toDo);

  }

  async checkUserExist(userEmail,userPassword){
    const result=toDoTransactions.checkUser(userEmail,userPassword);
    return result;
  }

  async getAsyncDetail(Id){
    const result=toDoTransactions.getToDoDetail(Id);
    return result;
  }

  async getAsync(userId){
    const result=toDoTransactions.getToDoList(userId);
    return result;
  }
  
}

module.exports = ToDoRouter;