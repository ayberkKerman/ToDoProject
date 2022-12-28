const sql = require("mssql/msnodesqlv8")
const conn = new sql.ConnectionPool({
      database: process.env.DB,
      server: process.env.DBSERVER,
      driver: process.env.DBDRIVER,
      port:process.env.DBPORT,
      options: {
          trustServerCertificate: process.env.DBTRUSTSERVERCERTIFICATE,
          trustedConnection: process.env.DBTRUSTEDCONNECTION
      }   
       
})

module.exports = conn
