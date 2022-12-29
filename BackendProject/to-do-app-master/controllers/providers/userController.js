const HttpStatusCode = require("http-status-codes");
const TransactionFactory = require("../../database/transactionFactory");
const { random } = require("../../utils");
const userTransactions = TransactionFactory.creating(
  "userTransactions"
);


class userController {
    async generateVerificationCode(){
        let verificationCode=random.generate({ length: 6 });
        return verificationCode;
          
    }
    async changePassword(userEmail,userPassword){
        userTransactions.changePassword(userEmail,userPassword);
    
    }
    async createUser(user){
        const result=userTransactions.createUser(user);
        return result;
    }
    async checkUserExist(userEmail){
        const result=userTransactions.checkUser(userEmail);
        return result;
    }
    async loginCheckUserExist(userEmail,userPassword){
        const result=userTransactions.loginCheckUser(userEmail,userPassword);
        return result;
    }
    async getEditor(){
        const result=userTransactions.getEditor();
        return result;
    }

    async getUser(){
        const result=userTransactions.getUser();
        return result;
    }

    async deleteEditor(id){
        userTransactions.deleteEditor(id);

    }

}

module.exports = userController;