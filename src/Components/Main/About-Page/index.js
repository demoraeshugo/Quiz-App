import React from "react";
import FadeIn from "react-fade-in";
import "../../../Styles/Styles.scss";

const AboutPage = () => {
  return (
    <div id="AboutPage">
      <FadeIn>
        <h4>Summary</h4>
        <p>
          Hello and thank you for checking out my project. My name is Hugo, I am
          a 21 year old Computer Science student and tech enthusiast. I am
          eagerly seeking a software development internship where I can put my
          front-end skills to good use. I'd also love to start developing a
          full-stack skillset where ever I land.
        </p>
        <h4>Why I'm excited to be a Front-End Engineer</h4>
        <p>
          Front-End engineering to me is a happy medium between design and
          technical work. I find that I enjoy a bit of both. I thoroughly
          enjoyed this project becuase I was able to go from a concept in my
          head, to a concrete design, and finally into a functional web app.
          Other software engineering positions are very abstract and hidden
          away. Front-End is... as the name says, front and center, and it's
          where I hope I will be too :)
        </p>
        <h4>Why did you build your site the way you did?</h4>
        <p>
          I wanted to create a "native" like experience on a web platform. I
          took a mobile-first development approach to ensure users across
          different platforms would have a satisfactory experience. Questions
          and answers are fed to the app via JSON file. For this project I used
          5 questions each with 3 answers, but this can very easily be expanded
          by modifying the JSON file.
        </p>
        <h4>What frameworks, if any, did you use, and why?</h4>
        <p>
          I used React JS to create this project. The majority of my work
          consisted of the application's logic and design. Prior to starting any
          coding I spent time scheming the app's architecture and used Adobe XD
          to wireframe a design. I enjoy creating React apps becuase they allow
          for faster and more intuitive user experiences. mentioned above, I
          wireframed this project using Adobe XD. I then used Sass as a CSS
          preprocesser becuase of it's customizability and ease. All the code is
          hosted on Github. A live version is being hosted via AWS conected to
          my repository. This was a very nice setup that allowed me to develop
          and deploy within minutes.
        </p>
      </FadeIn>
    </div>
  );
};

export default AboutPage;

/*



*/
