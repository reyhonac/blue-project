

import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-sky-50 text-white h-20 flex justify-between items-center">
        <div className="ml-4">
        <img src="./Assets/Img/blue.png" alt="" className="h-12 w-14  mx-auto mb-2 mr-4"  />

        </div>
        <ul className="flex justify-center gap-10  ">
          <li>
            <Link to="/" className="text-slate-600 ml-5   p-3 rounded-sm px-10   bg-gradient-to-r from-sky-300 to-sky-500 hover:from-sky-600 hover:to-sky-500 transition-colors duration-300 ease-in-out">تراکنش</Link>
          </li>
          <li>
            <Link to="/contact" className="text-slate-600 ml-5   p-3 rounded-sm px-5  bg-gradient-to-r from-sky-300 to-sky-500 hover:from-sky-600 hover:to-sky-500 transition-colors duration-300 ease-in-out">عملیات ثبت</Link>
          </li>
          <li>
            <Link to="/blogs" className="text-slate-600 ml-5   p-3 rounded-sm   bg-gradient-to-r from-sky-300 to-sky-500 hover:from-sky-600 hover:to-sky-500 transition-colors duration-300 ease-in-out">تاریخچه تراکنش</Link>
          </li>
        </ul>
      </nav>                    
      <Outlet />
    </>
  );
};

export default Navbar;

