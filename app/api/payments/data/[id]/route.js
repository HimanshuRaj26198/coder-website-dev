import Payments from "../../../../../models/Payments";
import connectToDB from "../../../../../lib/mongoose";

export async function GET(req, {params}){
    let {id} = await params;
    try{
        await connectToDB();
        let paymentData = await Payments.findOne({txnid: id});
        if(paymentData){
            return new Response(JSON.stringify({success: true, data: paymentData}), {status: 200})
        }else{
            return new Response(JSON.stringify({success: false, messgae: "Transaction Id not found"}), {status: 404})
        }
    }catch(err){
        return new Response(JSON.stringify({success: false, message: "Error in getting the payment details."}))
    }
}