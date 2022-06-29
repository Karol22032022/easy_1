import React from "react";
import "../styles/main.scss";
import {BrowserRouter, useNavigate} from "react-router-dom";
import { Button } from "@mui/material";



     export function Main(){
         const navigate = useNavigate();




         return (

             <section className="main_section">

                 <div className="main_section__div_one">
                   <Button style={{fontFamily:'Goldman, cursive', color:'whitesmoke'}}
                       className="button_apollo" onClick={ ()=> navigate("/apollo")}>Apollo 13</Button>
                 </div>
                 <div className="main_section__div_two">
                     <Button style={{fontFamily:'Goldman, cursive', color:'whitesmoke'}}
                         className="button_sojuz" onClick={ ()=> navigate("/sojuz-apollo")}>Sojuz-Apollo</Button>
                 </div>
                 <div className="main_section__div_three">
                     <Button style={{fontFamily:'Goldman, cursive', color:'whitesmoke'}}
                         className="button_spacex" onClick={ ()=> navigate("/spacex")}>Space-X</Button>
                 </div>
             </section>

         )


     }
