function Form() { 
    return ( 
        <> 
            <div className="min-h-screen bg-white f justify-center flex-col pb-16 mt-24  mb-24 h-96 flex items-center content-between "> 
              
                <form action="" className="rounded shadow-xl p-5  w-[700px] pt-[160px] "> 
                    <div className="mt-5"> 
                        <span className="block text-gray-500  font-semibold  pb-5">شماره حساب</span> 
                        <input type="text" maxLength="16" className="w-[600px] p-2.5  bg-neutral-300 rounded border-sky-200 border-solid border-2" /> 
                    </div> 
   
                    <div> 
                        <span className="block text-gray-500  font-semibold pb-5">دارنده کارت</span> 
                        <input type="text" className="w-[600px] p-2.5 bg-neutral-300 border-sky-200 border-solid border-2" /> 
                    </div> 
   
                    <div className="flex flex-wrap"> 
                        <div className="mr-16"> 
                            <span className="block text-gray-500  font-semibold  pb-4 ">تاریخ انقضا</span> 
                            <select name="" id="" className="w-[150px] p-2.5 bg-sky-200 "> 
                                <option value="month" selected disabled className="text-gray-500  font-semibold  ">ماه</option> 
                                <option value="01">01</option> 
                                <option value="02">02</option> 
                                <option value="03">03</option> 
                                <option value="04">04</option> 
                                <option value="05">05</option> 
                                <option value="06">06</option> 
                                <option value="07">07</option> 
                                <option value="08">08</option> 
                                <option value="09">09</option> 
                                <option value="10">10</option> 
                                <option value="11">11</option> 
                                <option value="12">12</option> 
                            </select> 
                        </div> 
   
                        <div className="mr-8"> 
                            <span className="block text-gray-500   font-semibold pb-5 ">سال</span> 
                            <select name="" id="" className="w-[150px] p-2.5  bg-sky-200"> 
                                <option value="year" selected disabled className=" text-gray-500  font-semibold">سال</option> 
                                <option value="1400">1400</option> 
                                <option value="1401">1401</option> 
                                <option value="1402">1402</option> 
                                <option value="1403">1403</option> 
                                <option value="1404">1404</option> 
                            </select> 
                        </div> 
   
                        <div className="mr-8"> 
                            <span className="block text-gray-500 font-semibold pb-5">cvv2</span> 
                            <input type="text" maxLength="4" className="w-[150px] p-2.5 rounded border-inherit border-solid border-2 bg-neutral-300" /> 
                        </div> 
                    </div> 
   
                    <div className="pt-4"> 
                    <button type="submit" className="w-[300px] p-4 rounded text-gray-500  mr-36 bg-gradient-to-r from-sky-300 to-sky-500 hover:from-sky-600 hover:to-sky-500 transition-colors duration-300 ease-in-out">پرداخت</button> 
                    </div> 
                </form> 
            </div> 
        </> 
    ) 
  } 
  export default Form;