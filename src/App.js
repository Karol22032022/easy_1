import React from "react";
import {Main} from "./components/main";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {ContactOne} from "./components/contact";
import "./styles/app.scss";
import {ApolloOne} from "./components/apollo";
import {SojuzApollo} from "./components/apollo_one";
import {Spacex} from "./components/spacex";

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
                    <Route path="/apollo" element={<ApolloOne/>}/>
                    <Route path="/sojuz-apollo" element={<SojuzApollo/>}/>
                    <Route path="/spacex" element={<Spacex/>}/>
                </Routes>

            </Router>

  );
}

export default App;
