var db = require("../../dbConfig")


class toDoTransactions {
    constructor() {}

    async changeToDo(id,toDo){
        try{
            
            await db.connect();
            await db.query`UPDATE tbl_ToDo SET IsCompleted=${toDo.IsCompleted}, Title=${toDo.Title}, CreateDate=${toDo.CreateDate},
             Detail=${toDo.Detail},Priority=${toDo.Priority},UserId=${toDo.UserId} Where Id=${id}`;

        }catch(err){
            console.log(err);
        }
    }

    async createToDo(toDo){
        try{
            
            await db.connect();
            await db.query`INSERT INTO tbl_ToDo (Title, CreateDate, IsCompleted,Detail,Priority,UserId)
            VALUES (${toDo.title}, ${toDo.createDate}, ${toDo.isCompleted}, ${toDo.detail},${toDo.priority},${toDo.userId});`;
        }catch(err){
            console.log(err);
        }
    }
    async deleteToDo(id){
        try{

            await db.connect();
            await db.query`DELETE FROM tbl_ToDo WHERE Id=${id}`;
        }catch(err){
            console.log(err);
        }
    }

    async changeIsCompleted(id,toDo){
        try{
            
            await db.connect();
            await db.query`UPDATE tbl_ToDo SET IsCompleted=${toDo.IsCompleted} Where Id=${id}`;

        }catch(err){
            console.log(err);
        }
    }
    async checkUser(userEmail,userPassword){
        try {
            await db.connect();
            const result = await db.query`select * from tbl_User Where Email=${userEmail} AND Password=${userPassword}`;
            return result;
        } catch (err) {        
            console.log(err);
        }
    }
    async getToDoList(userId){
        try {
            await db.connect();
            const result = await db.query`select * from tbl_ToDo Where UserId=${userId}`;
            return result;
        } catch (err) {        
            console.log(err);
        }
    }

    async getToDoDetail(Id){
        try {
            await db.connect();
            const result = await db.query`select * from tbl_ToDo Where Id=${Id}`;
            return result;
        } catch (err) {        
            console.log(err);
        }
    }
}
  
module.exports = toDoTransactions;