import Payments from "../../../../models/Payments";


export async function GET (){
    const body = await req.json();
    try{
        let paymentData = await Payments.find();
        return new Response(JSON.stringify({success: true, data: paymentData}), {status: 200})
    }catch(err){
        console.log(err);
        return new Response(JSON.stringify({success: false, message: "Error in getting payments"}))
    }
}