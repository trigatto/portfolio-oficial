import React from "react";

export default function About() {
  return (
    <section class="about" id="about">
      <div class="row">
        <h2>About Me</h2>
        <div class="about__content">
          <div class="about__text">
            <p>
              As a recent graduate in front-end development, I am excited to
              bring my diverse skill set to the world of programming. With over
              7 years of experience in sales and a background in energy
              engineering, I bring a unique perspective to problem-solving in
              the world of technology.
            </p>
            <p>
              As an engineer, I am trained to approach challenges methodically
              and logically. My experience in energy engineering has taught me
              to analyze complex systems, identify inefficiencies, and develop
              practical solutions to improve performance. I believe these skills
              translate directly to programming, where I can apply my analytical
              mindset to create clean and efficient code.
            </p>
            <p>
              In addition to my technical skills, my sales experience has given
              me excellent communication and collaboration skills. In sales, I
              learned how to listen to customers' needs, identify pain points,
              and offer effective solutions. I believe these skills are
              essential in programming, where collaboration and effective
              communication are key to building successful projects.
            </p>
            <p>
              I am proficient in HTML, CSS, and JavaScript, with experience
              working with React, React Native, and Next.js. I am eager to
              continue learning and expanding my skill set while creating
              innovative and user-friendly designs.
            </p>
            <a href="https://github.com/trigatto" class="btn">
              My Resume
            </a>
          </div>

          <div class="about__photo-container">
            <img class="about__photo" src="images\profile.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
