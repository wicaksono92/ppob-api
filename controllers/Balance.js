import Balance from "../models/BalanceModel.js";
import Transaksi from "../models/TransaksiModel.js";

 
export const getBalance = async(req, res) => {
    try {
        const balance = await Balance.findAll({
            attributes:['balance'],
            where:{
                user: req.email
            }
        });
        if(balance.length > 0){
            res.status(200).json({
                status:0,
                message:"Get Balance Berhasil",
                data:balance
    
            });

        }else{
            res.status(200).json({
                status:0,
                message:"Get Balance Berhasil",
                data:{balance:0}
    
            });
        }
        
    } catch (error) {
        console.log(error);
    }
}

export const topUp = async(req, res) => {

    const amount = req.body.top_up_amount;

    if(amount !== null && amount !== '') {

        try {

            let ts = Date.now();
            let date_time = new Date(ts);
            let date = date_time.getDate();
            let month = date_time.getMonth() + 1;
            let year = date_time.getFullYear();
            

            const type = "TOPUP";

            const trx = await Transaksi.findAll({
                    where:{
                        transaction_type:type
                    }
                });

            const jum    = trx.length+1;
            const inv    = "INV"+date+''+month+''+year+'-'+jum;

            await Transaksi.create({
                user:req.email,
                invoice_number: inv,
                service_code: "",
                service_name: "",
                transaction_type: type,
                total_amount: amount
             
            });

            const balance = await Balance.findAll({
                where:{
                    user:req.email
                }
            });

            if(balance.length > 0){

                const saldo_awal = balance[0].saldo_awal;
                const kredit = balance[0].kredit  + amount;
                const saldo_akhir = saldo_awal + kredit;
    
                 await Balance.update({kredit: kredit, balance:saldo_akhir},{
                    where:{
                        user: req.email
                     }
                });
        
                res.status(200).json({
                    status:0,
                    message:"Top Up Balance berhasil",
                    data:{balance:saldo_akhir}
                });

            }else{

                await Balance.create({
                    user:req.email,
                    saldo_awal: 0,
                    debit: 0,
                    kredit: amount,
                    balance: amount
                });

                res.status(200).json({
                    status:0,
                    message:"Top Up Balance berhasil",
                    data:{balance:amount}
                });



            }
    

        } catch (error) {
            console.log(error);
        }
     }else{
        res.status(400).json({
            status:102,
            message:"Paramter amount hanya boleh angka dan tidak boleh lebih kecil dari 0",
            data:null
        });

     }

}


 
 