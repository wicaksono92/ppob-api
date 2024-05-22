import { Sequelize } from "sequelize";
 
const db = new Sequelize('db_ppob', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;
