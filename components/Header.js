import React from "react";
import Hero from "./Hero";

export default function Header() {
  return (
    <header class="header" role="banner" id="top">
      <div class="row">
        <nav class="nav" role="navigation">
          <ul class="nav__items">
            <li class="nav__item">
              <a href="#work" class="nav__link">
                Work
              </a>
            </li>
            <li class="nav__item">
              <a href="/resume.html" class="nav__link">
                Resume
              </a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link">
                About
              </a>
            </li>
            <li class="nav__item">
              <a href="#contact" class="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <Hero />
      </div>
    </header>
  );
}
