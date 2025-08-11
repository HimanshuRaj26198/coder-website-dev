import Payments from "../models/Payments";


export async function  savePayment (data){
    try{
        let newPayment = new Payments(data);
        await newPayment.save();
        return {success: true, message: "Payment Saved Successfuly"}
    }catch(err){
        return {success: false, message: "Error in saving payment", err: err}
    }
}