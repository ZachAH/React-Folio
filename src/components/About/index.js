import React from 'react';


function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        {/* <i className="fas fa-user-circle"  style={{ fontSize: "96px" }}></i> */}
        <img  className="profile"src="/images/profile.jpg" alt="cute guy in chair"></img>
          <h2 className="yahoo" onClick={() => window.open("mailto:zacharyWD91@yahoo.com")}>zacharywd91@yahoo.com</h2>
        </div>
        <p>
        I recently graduated the certificate program from UWM Extended Campus. This was a full stack bootcamp utilizing the MERN stack. Immediately after graduation I started and completed a 60 hour react certificate course. I am currently enrolled in another course because, lets face it learning in web development never ends! I am trying to find my first career into web development which is proving to be as hard or even harder then the bootcamp itself(I know hard to believe..right?!)
        </p>
        <p>
        Since getting my certificate I have realized I love all things Front-End. From being the first thing users see and interact with. All the way to getting the artistic freedom and creativity to make websites look beautiful and stunning. Increasing user interactivity is another reason why I love the Front-End of web development. I always loved talking to customers in current and past jobs and the Front-End you are talking to the customers and interacting with them through your code.
        </p>
      </div>
    </section>
  );
}

export default About;
