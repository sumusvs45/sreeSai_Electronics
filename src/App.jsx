import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryPage from "./pages/category/CategoryPage";

import { ToastContainer } from "react-toastify";

import ContactForm from "./pages/contactus/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:categoryname" element={<CategoryPage />} />

        {/* <Route path="/user" element={<Account   setToken={setToken}/>}/> */}
       
        <Route path="/contact-us" element={<ContactForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
