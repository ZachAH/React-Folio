import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Download my <a href="/images/Resume.pdf" download>Resume</a>
        </p>
        <h3>Front-end Skills and Technologies</h3>
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
          <li>Gatsby</li>
        </ul>
        <h3>Back-end Skills and Technologies</h3>
        <ul className="skills">
          <li>Firebase</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>REST API</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
