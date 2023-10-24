import React from 'react'
import '../assets/scss/main.css'


export default function Customise() {
  return (
    <>
     <section class="infos-list container">
            <div class="infos-list__item">
                <h2 class="infos-list__title">
                    Customize
                </h2>
                <h3 class="infos-list__subtitle">
                    Create your own
                    bowl with your
                    favorites
                </h3>
                <a class="infos-list__action btn btn--warning" href="">Order Now </a>
            </div>
            <div class="infos-list__item">
                <h2 class="infos-list__title">
                    Nutrition
                </h2>
                <h3 class="infos-list__subtitle">
                    Download our
                    nutritional
                    information
                </h3>
                <a class="infos-list__action btn btn--warning" href="">
                    Download
                </a>
            </div>
            <div class="infos-list__item">
                <h2 class="infos-list__title">
                    The average American meal emits between 1.9 - 3.4
                    kg CO2e.
                </h2>
                <h3 class="infos-list__subtitle">
                    Check out how we
                    calculate our
                    carbon footprint
                </h3>
                <a class="infos-list__action btn btn--warning" href="">Carbon Methodology</a>
            </div>
        </section>
        
        <section class="bowl-signature">
            <div class="bowl-signature__higlight-image">
              <img src="src\assets\images\menu-banner_farm_highlights.png" alt="" />
            </div>
            <div class="bowl-signature__content">
                <div class="bowl-signature__content-heading">
                    <h2 class="bowl-signature__title">
                        Harvest Bowl
                    </h2>
                    <a class="bowl-signature_action btn btn--warning" href="">Order now</a>
                </div>
                <div class="bowl-signature__content-image">
                   <img src="src\assets\images\menu_harvest_bowl_almonds.jpg" alt="" />
                </div>
            </div>
        </section>
     

    </>
  )
}
