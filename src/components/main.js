import React from "react";
import "../styles/main.scss";
import {BrowserRouter, useNavigate} from "react-router-dom";
import {Button, colors} from "@mui/material";



     export function Main(){
         const navigate = useNavigate();



         return (
             <>
             <p style={{fontFamily:'Goldman, cursive', color:'whitesmoke', fontSize:'2rem', display:'flex', justifyContent:'center',
             alignItems:'center'
             }}>

                 Increase your knowledge about subjects below</p>
             <section className="main_section">

                 <div className="main_section__div_one" style={{display:'flex',
                     justifyContent:'center', alignItems:'flex-start'}}>
                   <Button style={{fontFamily:'Goldman, cursive', color:'whitesmoke', fontSize:'2rem'}}
                       className="main_section__button_apollo" onClick={ ()=> navigate("/apollo")}>
                       <p className="apollo_param"> Apollo 13</p>


                   </Button>
                 </div>
                 <div className="main_section__div_two" style={{display:'flex',
                     justifyContent:'center', alignItems:'flex-start'}}>
                     <Button style={{fontFamily:'Goldman, cursive', color:'whitesmoke', fontSize:'2rem'}}
                         className="button_sojuz" onClick={ ()=> navigate("/sojuz-apollo")}>
                         <p className="sojuz_param">Sojuz-Apollo</p>
                         </Button>
                 </div>
                 <div className="main_section__div_three" style={{display:'flex',
                     justifyContent:'center', alignItems:'flex-start'}}>
                     <Button style={{fontFamily:'Goldman, cursive', color:'whitesmoke', fontSize:'2rem'}}
                         className="button_spacex" onClick={ ()=> navigate("/spacex")}>
                         <p className="spacex_param">Space-X</p>
                         </Button>
                 </div>
             </section>
             </>
         )


     }
