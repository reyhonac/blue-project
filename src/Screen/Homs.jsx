import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Homs from "../Card";
import Blogs from "../Blogs";
import Contact from "../Contact";
import NoPage from "../Nopage";
import Footer from "../Footer"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="**" element={<Footer/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);