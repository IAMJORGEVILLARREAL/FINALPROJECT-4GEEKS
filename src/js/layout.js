import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import  About  from "./views/about";
import { Single } from "./views/single";
import  Contact  from "./views/contact"
import injectContext from "./store/appContext";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Demo />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
