import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Just-Plant-It',
      description: 'JavaScript/Bootstrap/Express/Restful API',
      link: "https://blooming-brook-59963.herokuapp.com/",
      repo: "https://github.com/ZachAH/Just-Plant-It-"
    },
    {
      name: 'crown-clothing',
      description: 'React/Redux/GraphQL/Firebase',
      link: "https://crown-jewels-lives.herokuapp.com/",
      repo: "https://github.com/ZachAH/Crown-Clothing"
    },
    {
      name: 'house-it',
      description: 'MERN Stack',
      link: "https://house-it.herokuapp.com/",
      repo: "https://github.com/ZachAH/House-It-"
    },
    {
      name: 'tic-tac-toe',
      description: 'React/JavaScript/CSS',
      link: "https://react-tac-toast.netlify.app/",
      repo: "https://github.com/ZachAH/react-tac-toe"
    },
    {
      name: 'weather-app',
      description: 'React/JavaScript/Openweathermap.org API/CSS',
      link: "https://zachsreactfulweather.netlify.app/",
      repo: "https://github.com/ZachAH/Reactful-Weather"
    },
    {
      name: 'dice-game',
      description: 'JavaScript/CSS',
      link: "https://suspicious-hamilton-885333.netlify.app/",
      repo: "https://github.com/ZachAH/pig-game"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
