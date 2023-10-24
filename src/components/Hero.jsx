import React from 'react'
import '../assets/scss/main.css'

function Hero() {
  return (
    <>
     <section class="menu-hero">
            <div class="container">
                <header>
                    <h1 class="menu-hero__title">
                        Fresh, plant-forward, earth friendly
                        food.
                    </h1>
                </header>
           
                <div class="menu-hero__content">
                    <div class="menu-hero__picture">
                       <img src="src\assets\images\hero-banner.png" alt="" />
                    </div>
                    <div class="menu-hero__body">
                        <div class="menu-hero__text">
                            <h2>Italian Chopped</h2>
                            <p>
                                Our take on an icon ft. salami, spicy <br/>
                                banana peppers and red wine
                                vinaigrette.
                            </p>
                            <a class="menu-hero__cta btn btn--warning" href="">GET IT</a>
                        </div>
                        <div class="menu-hero__details">
                            <p>
                                Salami, spicy banana peppers, heirloom
                                tomatoes, cucumbers, chickpeas, red
                                onions, shaved parmesan, chopped
                                romaine, shredded kale, red wine vinaigrette
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  
  )
}

export default Hero