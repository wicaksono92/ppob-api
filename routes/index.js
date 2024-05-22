import express from "express";
import { getUsers, Register, updateUsers, Login, updateImage } from "../controllers/Users.js";
import { getBanner, getServices} from "../controllers/Informasi.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { getBalance, topUp} from "../controllers/Balance.js";
import { getTrxHistory, trxPay } from "../controllers/Transaksi.js";
 
const router = express.Router();
 
router.post('/registration', Register);
router.post('/login', Login);
router.get('/profil', verifyToken, getUsers);
router.put('/profil/update', verifyToken, updateUsers);
router.put('/profil/image', verifyToken, updateImage);
router.get('/banner', verifyToken, getBanner);
router.get('/services', verifyToken, getServices);
router.get('/balance', verifyToken, getBalance);
router.post('/topup', verifyToken, topUp);
router.post('/transaction', verifyToken, trxPay);
router.get('/transaction/history', verifyToken, getTrxHistory);

 
export default router;