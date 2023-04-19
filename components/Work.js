import React from "react";

export default function Work() {
  return (
    <section class="work" id="work">
      <div class="row">
        <h2>My Work</h2>
        <div class="work__boxes">
          <div class="work__box">
            <div class="work__text">
              <h3>Personal Dashboard</h3>
              <p>A Chrome extension to help you focus and stay up-to-date.</p>
              <ul class="work__list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>

              <div class="work__links">
                <a
                  href="https://github.com/trigatto"
                  target="_blank"
                  class="link__text"
                >
                  Visit Site <span>&rarr;</span>
                </a>
                <a
                  href="https://github.com/trigatto"
                  title="View Source Code"
                  target="_blank"
                >
                  <img
                    src="./images/github.svg"
                    class="work__code"
                    alt="GitHub"
                  />
                </a>
              </div>
            </div>
            <div class="work__image-box">
              <img
                src="./images/dashboard-2.png"
                class="work__image"
                alt="Project 1"
              />
            </div>
          </div>

          <div class="work__box">
            <div class="work__text">
              <h3>Password Generator</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                eius.
              </p>
              <ul class="work__list">
                <li>React</li>
                <li>Next.js</li>
                <li>Node</li>
                <li>MongoDB</li>
              </ul>

              <div class="work__links">
                <a href="https://github.com/trigatto" class="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="#">
                  <img
                    src="./images/github.svg"
                    class="work__code"
                    title="View Source Code"
                    alt="GitHub"
                  />
                </a>
              </div>
            </div>
            <div class="work__image-box">
              <img
                src="./images/password.jpg"
                class="work__image"
                alt="Project 1"
              />
            </div>
          </div>

          <div class="work__box">
            <div class="work__text">
              <h3>Quizzical App</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                eius.
              </p>
              <ul class="work__list">
                <li>React</li>
                <li>Next.js</li>
                <li>Node</li>
                <li>MongoDB</li>
              </ul>

              <div class="work__links">
                <a href="#" class="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/trigatto">
                  <img
                    src="./images/github.svg"
                    class="work__code"
                    title="View Source Code"
                    alt="GitHub"
                  />
                </a>
              </div>
            </div>
            <div class="work__image-box">
              <img
                src="./images/quiz.jpg"
                class="work__image"
                alt="Project 3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
