import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import CompanyProfile from "../Pages/CompanyProfile";
import SisterCompany from "../Pages/SisterCompany";
import Products from "../Pages/Products";
import Contact from "../Pages/Contact";
import News from "../Pages/News";
import Import from "../Pages/Import";
import Export from "../Pages/Export";
import FAQ from "../Pages/FAQ";
function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CompanyProfile" element={<CompanyProfile />} />
        <Route path="/SisterCompany" element={<SisterCompany />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Import" element={<Import />} />
        <Route path="/Export" element={<Export />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
