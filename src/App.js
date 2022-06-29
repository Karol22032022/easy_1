import React from "react";
import {Main} from "./components/main";
import {Head_Top} from "./components/header";
import {Footer_One} from "./components/footer";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Contact_One} from "./components/contact";


function App() {
  return (
    <>
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

      <Main/>
      <Footer_One/>


    </>
  );
}

export default App;
