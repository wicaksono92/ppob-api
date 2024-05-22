import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Balance = db.define('balance',{
    user:{
        type: DataTypes.STRING
    },
    saldo_awal:{
        type: DataTypes.INTEGER
    },
    debit:{
        type: DataTypes.INTEGER
    },
    kredit:{
        type: DataTypes.INTEGER
    },
    balance:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Balance;