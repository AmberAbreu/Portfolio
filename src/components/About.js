import "../sass/style.scss"
import hero from '../images/croppedamber.png'

import React from 'react'

export default function About() {
  return (
    <div className="about">
      <h1> About Me</h1>
      <div className="about-content">
        <img src={hero} alt="picture of author" />
        <div className="about-content-text">
          <p>
            I was born and raised in Brooklyn, NY. I'm a huge foodie and on my
            free time you can catch me trying new cuisine.
          </p>

          <p>
            I majored in Linguistics at Stony Brook University. After taking my
            first Computational Linguistics class, I completely fell in love
            with the programming, however I was expecting a child and was too
            nervous to switch majors, in fear that I would not be able to juggle
            the workload. After graduating from university, I pushed myself to
            learn something new everyday. I remembered the joy I felt when
            coding, and that even though there were frustrating moments, I still
            enjoyed figuring out the problems that my professor threw at the
            class everyday. For three months, I dedicated myself to studying
            HTML, CSS, and JavaScript during my free time, AKA, whenever my baby
            was asleep. I was able to gain enough knowledge to get accepted into
            a bootcamp and follow my dream of entering the tech workload and
            become a Software Engineer.
          </p>

          <p>
            Now that I am finished with bootcamp, I am searching for a job
            opportunity that will allow me to grow and learn from great minds.
            In the meantime, I am following up on my promise to learn something
            new everyday. Now I am teaching myself Gatsby, GraphQL, and Sass,
            which is how I am creating this portfolio. I also plan to work on my
            side projects that include learning React Native, Solidity, and
            Web3.
          </p>
        </div>
      </div>
    </div>
  );
}
