var db = require("../../dbConfig")


class userTransactions {
    constructor() {}
    async createUser(user){
        try {
            await db.connect();
            const result = await db.query`INSERT INTO tbl_User (Email, Password, UserRole)
            VALUES (${user.userEmail}, ${user.userPassword}, ${user.userRole})`;
            return result;
        } catch (err) {        
            console.log(err);
        }
    }
    async checkUser(userEmail){
        try {
            await db.connect();
            const result = await db.query`select * from tbl_User Where Email=${userEmail}`;
            return result;
        } catch (err) {        
            console.log(err);
        }
    }

    async loginCheckUser(userEmail,userPassword){
        try {
            await db.connect();
            const result = await db.query`select * from tbl_User Where Email=${userEmail} AND Password=${userPassword}`;
            return result;
        } catch (err) {        
            console.log(err);
        }
    }

    async changePassword(email,password){
        try{
            
            await db.connect();
            await db.query`UPDATE tbl_User SET Password=${password} Where Email=${email}`;

        }catch(err){
            console.log(err);
        }
    }

    async getEditor(){
        let userRole = "Editor";
        try {
            await db.connect();
            const result = await db.query`select * from tbl_User Where UserRole=${userRole}`;
            return result;
        } catch (err) {        
            console.log(err);
        }
    }

    async getUser(){
        let userRole = "User";
        try {
            await db.connect();
            const result = await db.query`select * from tbl_User Where UserRole=${userRole}`;
            return result;
        } catch (err) {        
            console.log(err);
        }
    }

    async deleteEditor(id){
        try{

            await db.connect();
            await db.query`DELETE FROM tbl_User WHERE Id=${id}`;
        }catch(err){
            console.log(err);
        }
    }
    
}
  
module.exports = userTransactions;