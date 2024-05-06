import React from 'react';

function Footer() {
  return (
    <>
    <footer className="bg-sky-50 text-white py-4 mt-48   ">
      <div className="flex justify-between items-center mx-4">
        <div className="flex items-center">
          <div className="flex items-center mx-4">
            <img src="./Assets/Img/blue.png" alt="" className="h-12 w-12 mx-4" />
            <span className='text-stone-600 font-bold'>بلو بانک</span>
          </div>
        </div>
        <div className="flex items-center">
        <span className='text-stone-600 font-bold'>ارتباط با ما</span>
          <img src="./Assets/Img/insta.png" alt="" className="h-8 w-8 mx-2" />
          <img src="./Assets/Img/telegram.png" alt="" className="h-8 w-8 mx-2" />

          
        </div>
      </div>
      <hr className="border-pink-5500 my-4" />
      <div className="bg-neutral-300 text-center py-4 ">
        <img src="./Assets/Img/download.png" alt="" className="h-12 w-12 mx-auto mb-2" />
        <p className='text-stone-600'>  Copyright © 2023 bluBank Saman. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
