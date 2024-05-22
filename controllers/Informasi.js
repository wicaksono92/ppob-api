import Banner from "../models/BannerModel.js";
import Services from "../models/ServicesModel.js";

 
export const getBanner = async(req, res) => {
    try {
        const banner = await Banner.findAll({
            attributes:['banner_name','banner_image','description']
        });
        res.status(200).json({
            status:0,
            message:"Sukses",
            data:banner

        });
    } catch (error) {
        console.log(error);
    }
}

export const getServices = async(req, res) => {
    try {
        const services = await Services.findAll({
            attributes:['service_code','service_name','service_icon','service_tariff']
        });
        res.status(200).json({
            status:0,
            message:"Sukses",
            data:services

        });
    } catch (error) {
        console.log(error);
    }
}
 
 