import React from "react";
import "../styles/spacex.scss";
import YouTube, {YouTubeProps} from 'react-youtube';

export function Spacex(){

    function MyVideo() {
        const onPlayerReady: YouTubeProps['onReady'] = (event) => {

            event.target.pauseVideo();
        }

        const opts: YouTubeProps['opts'] = {

            playerVars: {
                maxHeight:'200px',
                maxWidth:'400px',

                autoplay: 1,
            },
        };

        return <YouTube videoId="-Oox2w5sMcA" opts={opts} onReady={onPlayerReady} />;
    }


return (
        <>

       <section className="section_spacex">

           <div className="photo_and_video">
               <p className="spacex_text_about">
                   Space Exploration Technologies Corp. (doing business as SpaceX) is an American spacecraft manufacturer, space launch provider,
                   and a satellite communications corporation headquartered in Hawthorne, California.
                   SpaceX was founded in 2002 by Elon Musk, with the goal of reducing space transportation costs to enable the colonization of Mars.
                   SpaceX manufactures the Falcon 9 and Falcon Heavy launch vehicles, several rocket engines, Cargo Dragon, crew spacecraft, and Starlink communications satellites.

                   In January 2019 SpaceX announced it would lay off 10% of its workforce in order to help finance the Starship and Starlink projects.
                   Construction of initial prototypes and tests for Starship started in early 2019 in Florida and Texas.
                   All Starship construction and testing moved to the new SpaceX South Texas launch site later that year. In May 2019
                   SpaceX also launched the first large batch of 60 Starlink satellites, beginning the deployment of what would become the world's
                   largest commercial satellite constellation the following year. The company raised a total of US$1.33 billion of capital across three funding rounds in 2019.
                   By May 2019, the valuation of SpaceX had risen to US$33.3 billion and reached US$36 billion by March 2020.


               </p>
               <div className="photo_vix">

                   <video className="video" autoPlay loop src="https://firebasestorage.googleapis.com/v0/b/test-space-11914.appspot.com/o/space%2FStarbase%20Gateway%20to%20Mars.mp4?alt=media&token=a4444c4e-9671-417e-a6fd-10d514dcbee9" />

               <img className="spacex_logo" src="https://firebasestorage.googleapis.com/v0/b/test-space-11914.appspot.com/o/space%2Fspacex2.png?alt=media&token=9d048888-fb4d-4345-85bc-4cbf78a7cfed" />
               </div>
               </div>




       </section>

        </>



    )


}