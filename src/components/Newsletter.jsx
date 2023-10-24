import React from 'react'
import '../assets/scss/main.css'

function Newsletter() {
  return (
    <section>
     <div class="newsletter">
    <h2 class="newsletter__title">Join Our Newsletter</h2>
    <p class="newsletter__text">
        Sign up for exclusive promos, new menu drops, store openings,
        and more.
    </p>
    <div class="newsletter__form-group">
        <input class="newsletter__form-field" type="email" placeholder="email"/>
        <input type="submit" value="Envoyer" class="btn btn--warning"/>
    
        </div>
    </div>
    </section>

  )
}

export default Newsletter