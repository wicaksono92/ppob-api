import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Services = db.define('services',{
    service_code:{
        type: DataTypes.STRING
    },
    service_name:{
        type: DataTypes.STRING
    },
    service_icon:{
        type: DataTypes.STRING
    },
    service_tariff:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Services;