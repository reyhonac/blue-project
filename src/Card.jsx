// import React,{ useState } from "react";





// function Card() { 

//     return ( 
//         <> 
//             <div className="min-h-screen bg-white  justify-center flex-col pb-14  h-96 flex items-center content-between pt-2.5"> 
//             <div className="mx-auto   h-[180px]   w-80  p-6  mt-24  bg-gradient-to-r from-sky-200 to-sky-400  duration-300 ease-in-out rounded-lg shadow-2xl relative"> 
//                     <img className="absolute top-3 left-3 h-8" src="./Assets/Img/blue.png" alt="Left Logo"/>    
//                     <img className="absolute top-3 right-3 h-8" src="./Assets/Img/sim (2).png" alt="Right Logo"/>    
//                     <div  className="text-center text-lg font-bold mt-10">################</div>    
//                     <div  className="text-center text-sm mt-3">دارنده کارت</div>    
//                     <div  className="absolute bottom-3 left-3 text-sm">CVV2: 123</div>    
//                     <div  className="absolute bottom-3 right-3 text-sm">انقضا: 12/24 </div>    
//             </div>    

//                 <form action="" className="rounded shadow-xl p-5 w-[700px] pt-[160px] "> 
//                     <div className="mt-5"> 
//                         <span className="block text-gray-500  font-semibold  pb-5">شماره حساب</span> 
//                         <input type="text"  maxLength="16"  className="w-[600px] p-2.5 rounded  bg-neutral-300 border-sky-200 border-solid border-2" /> 
//                     </div> 

                    
   
//                     <div> 
//                         <span className="block text-gray-500  font-semibold pb-5">دارنده کارت</span> 
//                         <input type="text"   className="w-[600px] p-2.5 bg-neutral-300 border-sky-200 border-solid border-2" /> 
//                     </div> 
   
//                     <div className="flex flex-wrap"> 
//                         <div className="mr-16"> 
//                             <span className="block text-gray-500  font-semibold  pb-4">تاریخ انقضا</span> 
//                             <select name="" id=""  className="w-[150px] p-2.5 bg-sky-200  "> 
//                                 <option value="month" selected disabled className="text-gray-500  font-semibold ">ماه</option> 
//                                 <option value="01">01</option> 
//                                 <option value="02">02</option> 
//                                 <option value="03">03</option> 
//                                 <option value="04">04</option> 
//                                 <option value="05">05</option> 
//                                 <option value="06">06</option> 
//                                 <option value="07">07</option> 
//                                 <option value="08">08</option> 
//                                 <option value="09">09</option> 
//                                 <option value="10">10</option> 
//                                 <option value="11">11</option> 
//                                 <option value="12">12</option> 
//                             </select> 
//                         </div> 

//                         <div className="mr-8"> 
//                             <span className="block text-gray-500   font-semibold pb-5 ">سال</span> 
//                             <select name="" id=""  className="w-[150px] p-2.5  bg-sky-200"> 
//                                 <option value="year" selected disabled className=" text-gray-500  font-semibold">سال</option> 
//                                 <option value="1400">1400</option> 
//                                 <option value="1401">1401</option> 
//                                 <option value="1402">1402</option> 
//                                 <option value="1403">1403</option> 
//                                 <option value="1404">1404</option> 
//                             </select> 
//                         </div> 


//                         <div className="mr-8"> 
//                             <span className="block text-gray-500 font-semibold pb-5">مبلغ انتقال وجه</span> 
//                             <input type="text" className="w-[150px] p-2.5 rounded bg-neutral-300 border-sky-200 border-solid border-2 " /> 
//                         </div> 







//                         <div className="mr-8"> 
//                             <span className="block text-gray-500 font-semibold pb-5">cvv2</span> 
//                             <input type="text"  className="w-[150px] p-2.5 rounded bg-neutral-300 border-sky-200 border-solid border-2 " /> 
//                         </div> 
//                     </div> 
   
//                     <div className="pt-4 "> 
//                         <button type="submit"  className="w-[300px] p-4  mr-36 rounded text-gray-500 bg-gradient-to-r from-sky-300 to-sky-500 hover:from-sky-600 hover:to-sky-500 transition-colors duration-300 ease-in-out"> پرداخت</button> 
//                     </div> 
//                 </form> 
//             </div> 
//         </> 
//     )  
//   } 
//   export default Card;

// import React, { useState } from 'react';

// const BankPaymentForm = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardName, setCardName] = useState('');
//   const [cardCVV2, setCardCVV2] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [dynamicPassword, setDynamicPassword] = useState('');
//   const [transferAmount, setTransferAmount] = useState('');
//   const [transactionHistory, setTransactionHistory] = useState([]);

//   const handlePayment = () => {
//     // بررسی اطلاعات و انتقال اطلاعات به درگاه بانکی
    
//     // پس از تایید پرداخت، افزودن اطلاعات تراکنش به تاریخچه
//     const newTransaction = {
//       cardNumber,
//       cardName,
//       transferAmount,
//       transferDate: new Date().toLocaleString()
//     };
//     setTransactionHistory([...transactionHistory, newTransaction]);
    
//     // اقدامات دیگر مانند کسر مبلغ انتقال شده از حساب و غیره
//   };

//   return (           
      
//       <div className="min-h-screen bg-white  justify-center flex-col pb-14  h-96 flex items-center content-between pt-2.5"> 
        
//          <form action="" className="rounded shadow-xl p-5 w-[700px] pt-[160px] "> 
         
//          <div className="mt-5"> 
//             <span className="block text-gray-500  font-semibold  pb-5">شماره حساب</span>
//             <input type="text" placeholder="شماره کارت (۱۶ رقم)" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}  maxLength="16"  className="w-[600px] p-2.5 rounded  bg-neutral-300 border-sky-200 border-solid border-2"/>
//         </div>

//         <div className="mt-5"> 
//             <span className="block text-gray-500  font-semibold  pb-5"></span>
//             <input type="text" placeholder="نام و نام خانوادگی"  value={cardName}    onChange={(e) => setCardName(e.target.value)}   maxLength="16"  className="w-[600px] p-2.5 rounded  bg-neutral-300 border-sky-200 border-solid border-2"/>

//         </div>
//       <input type="text" placeholder="cvv2 (۳ رقم)"value={cardCVV2}onChange={(e) => setCardCVV2(e.target.value)}  maxLength="16"  className="w-[600px] p-2.5 rounded  bg-neutral-300 border-sky-200 border-solid border-2"/>


//       <div className="flex flex-wrap"> 
//                          <div className="mr-16"> 
//                              <span className="block text-gray-500  font-semibold  pb-4">تاریخ انقضا</span> 
//                              <select name="" id=""  className="w-[150px] p-2.5 bg-sky-200  "> 
//                                  <option value="month" selected disabled className="text-gray-500  font-semibold ">ماه</option> 
//                                  <option value="01">01</option> 
//                                  <option value="02">02</option> 
//                                  <option value="03">03</option> 
//                                  <option value="04">04</option> 
//                                  <option value="05">05</option> 
//                                <option value="06">06</option> 
//                                  <option value="07">07</option>       
//                                                             <option value="08">08</option> 
//                                  <option value="09">09</option> 
//                                  <option value="10">10</option> 
//                                 <option value="11">11</option> 
//                                  <option value="12">12</option> 
//                              </select> 
//                          </div> 

//                         <div className="mr-8"> 
//                             <span className="block text-gray-500   font-semibold pb-5 ">سال</span> 
//                             <select name="" id=""  className="w-[150px] p-2.5  bg-sky-200"> 
//                                 <option value="year" selected disabled className=" text-gray-500  font-semibold">سال</option> 
//                                 <option value="1400">1400</option> 
//                                 <option value="1401">1401</option> 
//                                 <option value="1402">1402</option> 
//                                 <option value="1403">1403</option> 
//                                  <option value="1404">1404</option> 
//                             </select> 
//                         </div> 
//                         </div> 

//       <input type="text" placeholder="رمز دوم پویا"value={dynamicPassword} onChange={(e) => setDynamicPassword(e.target.value)}  maxLength="16"  className="w-[600px] p-2.5 rounded  bg-neutral-300 border-sky-200 border-solid border-2"/>
//       <input type="text" placeholder="مبلغ انتقال" value={transferAmount} onChange={(e) => setTransferAmount(e.target.value)}  maxLength="16"  className="w-[600px] p-2.5 rounded  bg-neutral-300 border-sky-200 border-solid border-2"/>
//       <button onClick={handlePayment}>انجام پرداخت</button>
      
//       <h2>تاریخچه تراکنش‌ها:</h2>
//       <ul>
//         {transactionHistory.map((transaction, index) => (
//           <li key={index}>
//             <div>شماره کارت: {transaction.cardNumber}</div>
//             <div>نام و نام خانوادگی: {transaction.cardName}</div>
//             <div>مبلغ انتقال: {transaction.transferAmount}</div>
//             <div>زمان انتقال: {transaction.transferDate}</div>
//           </li>
//         ))}
//       </ul>
//       </form>
//     </div>
    
//   );
// };

// export default BankPaymentForm;


import React, { useState } from 'react';

const BankPaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardCVV2, setCardCVV2] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [dynamicPassword, setDynamicPassword] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [transactionHistory, setTransactionHistory] = useState([]);

  const handlePayment = () => {
    const newTransaction = {
      cardNumber,
      cardName,
      transferAmount,
      transferDate: new Date().toLocaleString()
    };
    setTransactionHistory([...transactionHistory, newTransaction]);

    // Other actions like deducting the transferred amount from the account, etc.
  };

  return (
    <div className="p-4 space-y-4">
      <input type="text" placeholder="شماره کارت (۱۶ رقم)" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="p-2 border"/>

      <input type="text" placeholder="نام و نام خانوادگی"  value={cardName}onChange={(e) => setCardName(e.target.value)} className="p-2 border" />
      <input type="text"  placeholder="cvv2 (۳ رقم)"  value={cardCVV2}  onChange={(e) => setCardCVV2(e.target.value)} className="p-2 border"/>
      <input type="text" placeholder="تاریخ انقضا" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className="p-2 border"/>
      <input type="text"  placeholder="رمز دوم پویا" value={dynamicPassword} onChange={(e) => setDynamicPassword(e.target.value)} className="p-2 border"/>
      <input type="text"  placeholder="مبلغ انتقال"  value={transferAmount}  onChange={(e) => setTransferAmount(e.target.value)} className="p-2 border" />
      <button onClick={handlePayment} className="p-2 bg-blue-500 text-white rounded">انجام پرداخت 🌟</button>

      <h2>تاریخچه تراکنش‌ها:</h2>
      <ul>
        {transactionHistory.map((transaction, index) => (
          <li key={index} className="p-2 border mt-2">
            <div>شماره کارت: {transaction.cardNumber}</div>
            <div>نام و نام خانوادگی: {transaction.cardName}</div>
            <div>مبلغ انتقال: {transaction.transferAmount}</div>
            <div>زمان انتقال: {transaction.transferDate}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BankPaymentForm;

