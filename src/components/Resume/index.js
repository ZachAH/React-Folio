import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Download my <a href="https://www.linkedin.com/">resume</a>
        </p>
        <h3>Front-end Skill and Technologies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>Sass and Less</li>
          <li>JavaScript ES6+</li>
          <li>JSX</li>
          <li>jQuery</li>
          <li>React</li>
          <li>React Router</li>
          <li>Redux(front-end and back-end)</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Skills and Technologies</h3>
        <ul className="skills">
          <li>Firebase</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
