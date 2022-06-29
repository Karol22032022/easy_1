import React from "react";
import {Main} from "./components/main";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {ContactOne} from "./components/contact";
import "./styles/app.scss";

function App() {



    return (

              <Router>

                <nav className={"app_nav"}>

                    <Link className={"app__name"} to="/">SpaceOne</Link>
                    <Link className={"app__link_one"} to="/" >Home</Link>
                    <Link className={"app__link_two"} to="/contact" >Contact</Link>

                </nav>

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/contact" element={<ContactOne />} />
                </Routes>

            </Router>

  );
}

export default App;
