import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {ApolloOne} from "./apollo";
import React from "@types/react";


export function Link(){
    return(
        <BrowserRouter>
            <nav>
                <Link  className="apollo_link" to="/apollo">Check this!</Link>
            </nav>
            <Routes>
                <Route path="/apollo" element={<ApolloOne/>}/>
            </Routes>
        </BrowserRouter>




    )


}


