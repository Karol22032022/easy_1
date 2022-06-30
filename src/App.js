import React from "react";
import {Main} from "./components/main";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {ContactOne} from "./components/contact";
import "./styles/app.scss";
import {ApolloOne} from "./components/apollo";
import {SojuzApollo} from "./components/apollo_one";
import {Spacex} from "./components/spacex";
import {Footer_One} from "./components/footer";

function App() {



    return (
<>
              <Router>

                <nav className={"app_nav"}>

                    <Link className={"app__name"} to="/">SpaceOne</Link>
                    <Link className={"app__link_one"} style={{fontSize:'1.5rem'}} to="/" >Home</Link>
                    <Link className={"app__link_two"} style={{fontSize:'1.5rem'}} to="/contact" >Contact</Link>

                </nav>

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/contact" element={<ContactOne />} />
                    <Route path="/apollo" element={<ApolloOne/>}/>
                    <Route path="/sojuz-apollo" element={<SojuzApollo/>}/>
                    <Route path="/spacex" element={<Spacex/>}/>
                </Routes>

            </Router>
    <Footer_One/>
</>
  );
}

export default App;
