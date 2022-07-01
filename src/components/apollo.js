import React from "react";
import "../styles/apollo.scss";


export function ApolloOne(){



    return(
        <section className="apollo">



            <div className="apollo_media">


                    <img style={{maxWidth:'15rem', maxHeight:'15rem'}} className="apollo_sign" src={"https://firebasestorage.googleapis.com/v0/b/test-space-11914.appspot.com/o/space%2FApollo_13-insignia.png?alt=media&token=2c779969-c8df-4a5f-9994-abb6316a62b0"}>

                    </img>

                    <p className="apollo_history">
                        Apollo 13 (April 11–17, 1970) was the seventh crewed mission in the Apollo space program and the third meant to land on the Moon.
                        The craft was launched from Kennedy Space Center on April 11, 1970, but the lunar landing was aborted after an oxygen tank in the service module (SM)
                        failed two days into the mission. The crew instead looped around the Moon and returned safely to Earth on April 17.
                        The mission was commanded by Jim Lovell, with Jack Swigert as command module (CM) pilot and Fred Haise as Lunar Module (LM) pilot.
                        Swigert was a late replacement for Ken Mattingly, who was grounded after exposure to rubella.

                        A routine stir of an oxygen tank ignited damaged wire insulation inside it, causing an explosion that vented the contents
                        of both of the SM's oxygen tanks to space. Without oxygen, needed for breathing and for generating electric power,
                        the SM's propulsion and life support systems could not operate. The CM's systems had to be shut down to conserve its remaining resources for reentry,
                        forcing the crew to transfer to the LM as a lifeboat. With the lunar landing canceled, mission controllers worked to bring the crew home alive.
                    </p>


                    <video  autoPlay loop muted className="video_apollo" typeof="video/mp4" src="https://firebasestorage.googleapis.com/v0/b/test-space-11914.appspot.com/o/space%2FSpace%20Shuttle%20Launch.mp4?alt=media&token=7865d62e-abf3-46e1-b1a6-a58988f95915">

                    </video>



            </div>




        </section>


    )


}

