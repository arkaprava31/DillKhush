import React from "react";

function Home ()
{
    return (
        <section id="home">
            <div className="false-home">&emsp;</div>
            <div class="bg">
                <div class="intro">
                    <h3>Welcome to Dillkhush</h3>
                    <h1>Simple Way To </h1>
                    <span>Find Your Love</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis explicabo, hic adipisci eos animi, beatae accusantium facilis facere dicta quae voluptatum.</p>
                    <div class="down">
                        <div class="but1"><ion-icon name="logo-apple"></ion-icon></div>
                        <div class="but2"><ion-icon name="logo-google-playstore"></ion-icon></div>
                    </div>
                </div>
                <div class="bg-pic">
                    <img src="images/dillkhush-tbs.png" alt="Dillkhush Home Promo" srcset="images/dillkhush-tbs.png" />
                </div>
            </div>
        </section>
    )
};

export default Home;