import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Transaksi = db.define('transaksi',{
    user:{
        type: DataTypes.STRING
    },
    invoice_number:{
        type: DataTypes.STRING
    },
    service_code:{
        type: DataTypes.STRING
    },
    service_name:{
        type: DataTypes.STRING
    },
    transaction_type:{
        type: DataTypes.STRING
    },
    total_amount:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Transaksi;