import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams} from "react-router-dom";
import ReactToPrint from 'react-to-print';
import { useRef } from "react";

const InvoicePage = () => {
    
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    const { transactionId } = useParams();
    console.log(transactionId);
    const componentRef = useRef()

    //get user payments history
    const {data: payment={}} = useQuery({
        queryKey:['payment'],
        queryFn:async()=>{
            const { data } = await axiosSecure(`/payment/invoice/${transactionId}`);
             return data;
        }
    })
    console.log(payment);

    return (
        <>
        
        <div className="bg-white h-full px-8 py-10 max-w-4xl mx-auto my-10" ref={componentRef}>
        <ReactToPrint
        trigger={()=><button className="mx-auto  text-center text-blue-400">Print / Download</button>}
        content={()=>componentRef.current}
        ></ReactToPrint>
    <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
        <img src="/logo.png" alt="" className="w-10 h-10 mr-2 object-cover" />
            <div className="text-gray-700 font-semibold text-xl font-outfit">MediStore</div>
        </div>
        <div className="text-gray-700">
            <div className="font-bold text-xl mb-2">INVOICE</div>
            <div className="text-sm">Date: {new Date().toLocaleDateString()}</div>
            <div className="text-sm">Invoice : {payment?.transactionId}</div>
        </div>
    </div>
    <div className="border-b-2 border-gray-300 pb-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Bill To: {payment.buyer?.name || 'anonymous'}</h2>
        <div className="text-gray-700 mb-2">Name: {payment?.buyer?.email}</div>
        <div className="text-gray-700 mb-2">{new Date(payment?.date).toLocaleDateString()}</div>
        <div className="text-gray-700 mb-2">123 Main St.</div>
        <div className="text-gray-700 mb-2">Anytown, Bangladesh 12345</div>
        
    </div>
    <table className="w-full text-left mb-8">
        <thead>
            <tr>
                
                <th className="text-gray-700 font-bold uppercase py-2">Total Products</th>
                
                <th className="text-gray-700 font-bold uppercase py-2">Total</th>
            </tr>
        </thead>
        <tbody>
            
              <tr >
                    <td className="py-4 text-gray-700">{payment?.cartIds?.length}</td>
                    
                    <td className="py-4 text-gray-700">${payment?.price}</td>
                   
                </tr>
            

        </tbody>
    </table>

    <div className="border-t-2 border-gray-300 pt-8 mb-8">
        <div className="text-gray-700 mb-2">Payment is due within 30 days. Late payments are subject to fees.</div>
        <div className="text-gray-700 mb-2">Please make checks payable to MediStore and mail to: <span className='text-blue-500'>medistore@gmail.com</span></div>
        <div className="text-gray-700">123 Main St., Anytown, Bangladesh 12345</div>
    </div>
</div></>

    );
};

export default InvoicePage;