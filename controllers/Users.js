import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";
import fs from "fs";
 
export const getUsers = async(req, res) => {
    try {
        const users = await Users.findOne({
            attributes:['email','first_name','last_name','profile_image'],
            where:{
                email: req.email
            }
        });
        res.status(200).json({
            status:0,
            massage:"Sukses",
            data:users
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateUsers = async(req, res) => {

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;

    if(first_name !== null && first_name !== '') {

        try {
    
            await Users.update({first_name: first_name, last_name: last_name},{
                where:{
                    email: req.email
                }
            });

            const users = await Users.findAll({
                attributes:['email','first_name','last_name','profile_image'],
                where:{
                    email: req.email
                }
            });
        
            res.status(200).json({
                status:0,
                message:"Update Pofile berhasil",
                data:users
            });
        } catch (error) {
            console.log(error);
        }
     }else{
        res.status(400).json({
            status:102,
            message:"Paramter Kosong",
            data:null
        });

     }
     
}
 
export const Register = async(req, res) => {
    const { first_name,last_name, email, password} = req.body;

    const user = await Users.findAll({
        where:{
            email: req.body.email
        }
    });
   if(user.length > 0) 
        return res.status(400).json({
            status:108,
            message:"Email Sudah Terdaftar",
            data:null
        });

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashPassword
        });
        res.status(200).json({
            status:0,
            massage:"Registrasi berhasil silahkan login",
            data:null
        });
    } catch (error) {
        console.log(error);
    }
}
 
export const Login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) 
            return res.status(400).json({
                status:103,
                massage:"Username atau Password Salah",
                data:null
            });
        const userId = user[0].id;
        const name = user[0].first_name;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '30s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
       
        res.status(200).json({
            status:0,
            massage:"Login Sukses",
            data:{token:accessToken}
        });
    } catch (error) {
        res.status(400).json({
            status:102,
            massage:"Paramter email tidak sesuai format",
            data:null
        });
    }
}

export const updateImage = async(req, res)=>{
    const user = await Users.findOne({
        where:{
            email: req.email
        }
    });
    if(!user) 
        return res.status(400).json({
            status:102,
            message:"Tidak Ada File",
            data:null
        });
     
    let fileName = "";
    if(req.files === null){
        fileName = user.profile_image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];
 
        if(!allowedType.includes(ext.toLowerCase())) 
            return res.status(400).json({
                status:102,
                message:"Format Image tidak sesua",
                data:null
            });
        if(fileSize > 5000000) 
            return res.status(400).json({
                status:102,
                message:"Ukuran File Melebihi 5MB",
                data:null
            });
 
        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
     
    try {
        await Users.update({profile_image: url},{
            where:{
                email: req.email
            }
        });

        const users = await Users.findOne({
            attributes:['email','first_name','last_name','profile_image'],
            where:{
                email: req.email
            }
        });
        res.status(200).json({
            status:0,
            massage:"Update Profile Image berhasil",
            data:users
        });
    } catch (error) {
        console.log(error.message);
    }
}
 
