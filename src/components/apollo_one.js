

import React from "react";
import "../styles/apollo_one.scss";

export function SojuzApollo(){
    return(
        <>
        <section className="th__apollo_section">
            <p className="th__apollo_text">
                Apollo–Soyuz was the first crewed international space mission, carried out jointly by the United States and the Soviet Union in July 1975.
                Millions of people around the world watched on television as a United States Apollo spacecraft docked with a Soviet Union Soyuz capsule.
                The project, and its memorable handshake in space, was a symbol of détente between the two superpowers during the Cold War,
                and it is generally considered to mark the end of the Space Race, which had begun in 1957 with the Soviet Union's launch of Sputnik 1.

                The mission was officially known as the Apollo–Soyuz Test Project (Russian: Экспериментальный полёт «Союз» – «Аполлон» (ЭПАС), romanized:
                Eksperimentalniy polyot Soyuz–Apollon
                (EPAS)'Experimental flight Soyuz-Apollo', and commonly referred to in the Soviet Union as Soyuz–Apollo;
                the Soviets officially designated the mission as Soyuz 19). The unnumbered American vehicle was left over from the canceled Apollo missions,
                and was the last Apollo module to fly.

                Apollo–Soyuz was the last crewed United States spaceflight for nearly six years until the first launch of the Space Shuttle on 12 April 1981,
                and the last crewed United States spaceflight in a space capsule until Crew Dragon Demo-2 on May 30th, 2020.

            </p>
            <div className="sojuz_media">

                <video  autoPlay loop muted className="video_sojuz" typeof="video/mp4" src="https://firebasestorage.googleapis.com/v0/b/test-space-11914.appspot.com/o/space%2FApollo%20Soyuz.mp4?alt=media&token=a555a744-687a-46e2-9fc0-939abb04944f">

                </video>



            </div>

            <img style={{maxWidth:'15rem', maxHeight:'15rem'}} className="sojuz_sign" src={"https://firebasestorage.googleapis.com/v0/b/test-space-11914.appspot.com/o/space%2Fapollo%20sojuz.png?alt=media&token=5ef22a28-3820-4ddf-adfb-ceafd2614129"}>

            </img>

        </section>



        </>

    )

}