import React from "react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";


import "./style.css";

function Home(props) {

    // let imgUrl = "../../images/wall.jpeg";

    // let styles =  {
    //     main: {
    //         backgroundImage: `url(${ imgUrl })`,
    //         backgroundRepeat  : 'no-repeat',
    //         backgroundPosition: 'center',
    //     }
    // }


    return (
        <div>
            {/* <Header />   */}
                <div class="home-wrapper">
                    <div className="scene" id="welcome">
                        <article class="content">
                            <div className="gallery"></div>
                            
                        </article>
                    </div>
                    <div className="sceneIntro" id="siteInfo">
                        <article id="usefulInfo">
                            <section id="searchInfo">
                                <h2>How we roll...</h2>
                                <ul>
                                    <li><strong>"One good thing about music, when it hits you, you feel no pain." - Bob Marley</strong></li>
                                    <li>This site will gather data from the Interwebs by utilizing a Web API to search and produce the albums from a given artist. Click on the 'search form' link to get things started.</li>
                                </ul>
                            </section>
                        </article>
                    </div>
                </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Home;