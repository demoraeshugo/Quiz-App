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
        <h4>Why did you build your site the way you did?</h4>
        <p>
          I wanted to create a "native" like experience on a web platform. To
          accomplish this, I took a mobile-first development approach to ensure
          users across different platforms would have a satisfactory experience
          The questions are actually fully modular. Questions and answers are
          fed to the app via JSON file. For this project I used 5 questions each
          with 3 asnwers, but this can very easily be expanded by modifying the
          JSON instead of the whole app.
        </p>
        <h4>What frameworks, if any, did you use, and why?</h4>
        <p>
          I used React JS to create this project. The majority of my work
          consisted of the application's logic and design. Prior to starting any
          coding I spent time scheming the app's architecture and used Adobe XD
          to wireframe a design. I enjoy creating React apps becuase they allow
          developers to create faster and more intuitive user experiences.
          React's virtual DOM means that only parts of the DOM that change need
          to be rerendered, which makes for faster updating and rendering. As
          mentioned above, I wireframed this project using Adobe XD. I then used
          Sass as a CSS preprocesser becuase of it's customizability and ease.
          All the code is hosted on Github. A live version is being hosted via
          AWS conected to my repository. This was a very nice setup that allowed
          me to develop and deploy within minutes.
        </p>
      </FadeIn>
    </div>
  );
};

export default AboutPage;

/*



*/
