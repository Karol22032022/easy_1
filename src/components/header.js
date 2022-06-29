import "../styles/header.scss";
import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {Contact_One} from "./contact";



export function Head_Top(){
  return(
      <header className="header_top">
          <h1>SpaceOne</h1>
          <BrowserRouter>

              <nav>
                  <Link to="/contact" >Contact</Link>

              </nav>



              <Routes>
                  <Route path="/contact" element={<Contact_One />} />
              </Routes>

          </BrowserRouter>
      </header>



  )

}