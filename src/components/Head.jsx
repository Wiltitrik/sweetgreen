import React from 'react'
import '../assets/scss/main.css'


function Head() {
  return (
    <header class="header">
         <div class="container">
            <nav class="header__nav">
                <ul class="header__nav-left">
                    <li><a href="">Our Menu</a></li>
                    <li><a href="">Our Mission</a></li>
                    <li><a href="">The Market</a></li>
                </ul>
                <div class="header__nav-logo">
                    <img src="src\assets\images\logo.svg" alt="" />
                  
                </div>
                <ul class="header__nav-right">
                    <li><a href="">Outpost</a></li>
                    <li><a href="">Catering</a></li>
                    <li><a href="">Locations</a></li>
                    <li><a class="btn btn--primary" href="">Order</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Head

