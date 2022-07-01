import "../styles/footer.scss";
import React from "react";


export function Footer_One(){
    return(
        <footer className="footer_one">

            <h2 className="space_one_ha">SpaceOne</h2>
            <p className="footer_about">Outer space, commonly shortened to space, is the expanse that exists beyond Earth and its atmosphere and between celestial bodies.

            </p>
            <div className="icons_footer">
             <img className="inst_icon" style={{maxHeight:'2rem'}} src="https://firebasestorage.googleapis.com/v0/b/test-space-11914.appspot.com/o/space%2FInstagram_logo_2016.svg.png?alt=media&token=1ed3990d-d8a4-402b-aef9-79e0c4cd3c6d"/>
                <img className="twi_icon" style={{maxHeight:'2rem', marginLeft:'2rem'}} src="https://firebasestorage.googleapis.com/v0/b/test-space-11914.appspot.com/o/space%2FTwitter-logo.svg.png?alt=media&token=d603f0ab-a303-44a4-865f-a395c583a7ce"/>
            </div>

        </footer>


    )

}