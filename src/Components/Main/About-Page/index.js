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
          a 21 year old Computer Science student & tech enthusiast
        </p>
        <h4>Why did you build your site the way you did?</h4>
        <p>
          I wanted to create a "native" like experience on a web platform. To
          accomplish this, I took a mobile-first development approach to ensure
          users across different platforms wwould have a satisfactory experience
        </p>
        <h4>What frameworks, if any, did you use, and why?</h4>
        <p>
          I used React JS to create this app. React saves a lot of proccessing
          power through it's virtual DOM. Allowing developers (like you and I
          :)) to create more powerful, native-like applications and user
          experiences. I used Sass as my CSS pre-processer to allow for more
          customizability and ease of use.
        </p>
      </FadeIn>
    </div>
  );
};

export default AboutPage;

/*



*/
