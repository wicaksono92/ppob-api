import Transaksi from "../models/TransaksiModel.js";
import Services from "../models/ServicesModel.js";
import Balance from "../models/BalanceModel.js";

 
export const getTrxHistory = async(req, res) => {
    try {
        const offset = parseInt(req.query.offset);
        const limit = parseInt(req.query.limit);
        const trx = await Transaksi.findAll({
            attributes:['invoice_number','transaction_type','service_code','total_amount','createdAt'],
            where:{
                user:req.email
            },
            limit : [(offset*limit), limit],
        });
        res.status(200).json({
            status:0,
            message:"Get History Berhasil",
            data:{offset:offset,limit:limit,recort:trx}

        });
    } catch (error) {
        console.log(error);
    }
}

export const trxPay = async(req, res) => {
    const code = req.body.service_code;

    if(code !== null && code !== '') {

        try {
            const service = await Services.findAll({
                where:{
                    service_code:code
                }
            });

            if(service && service.length > 0){
                let ts = Date.now();
                let date_time = new Date(ts);
                let date = date_time.getDate();
                let month = date_time.getMonth() + 1;
                let year = date_time.getFullYear();

                const type = "PAYMENT";

                const trx = await Transaksi.findAll({
                    where:{
                        transaction_type:type
                    }
                });

                const jum    = trx.length+1;
                const amount = service[0].service_tariff;
                const code   = service[0].service_code;
                const name   = service[0].service_name;
                const inv    = "INV"+date+''+month+''+year+'-'+jum;

                const balance = await Balance.findAll({
                    where:{
                        user:req.email
                    }
                });

                if (balance.length < 1) 

                    return res.status(400).json({
                        status:102,
                        message:"Saldo Belum Ada, Harap Top Up Saldo Anda",
                        data:null
                    });

                const saldo_awal = balance[0].balance;
                const debit = balance[0].debit  + amount;
                const saldo_akhir = saldo_awal - debit;

                if (saldo_awal < amount) 

                    return res.status(400).json({
                        status:102,
                        message:"Saldo Tidak Cukup, Harap Top Up Saldo Anda",
                        data:null
                    });
        
                await Balance.update({debit: debit, balance:saldo_akhir},{
                    where:{
                        user: req.email
                    }
                });

                await Transaksi.create({
                    user:req.email,
                    invoice_number: inv,
                    service_code: code,
                    service_name: name,
                    transaction_type: type,
                    total_amount: amount
                 
                });

                res.status(200).json({
                    status:0,
                    message:"Transaksi berhasil",
                    data:{
                        invoice_number: inv,
                        service_code: code,
                        service_name: name,
                        transaction_type: type,
                        total_amount: amount,
                        created_on: date_time
                    }
                });

            }else{
                res.status(400).json({
                    status:102,
                    message:"Service ataus Layanan tidak ditemukan",
                    data:null
                });
            }

            
        } catch (error) {
            console.log(error);
        }
     }else{
        res.status(400).json({
            status:102,
            message:"Service ataus Layanan tidak ditemukan",
            data:null
        });

     }
}



 
 