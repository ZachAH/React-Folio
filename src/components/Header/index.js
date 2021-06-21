import React from 'react';
import ParticlesBackground from '../Particles/ParticleBackground';
import '../Header/style.css';
<link href="https://fonts.googleapis.com/css?family=Work+Sans:400,600,800&display=swap" rel="stylesheet"></link>

function Header(props) {

  return (

    
    
    <header className="flex-row space-between px-0">
     <ParticlesBackground></ParticlesBackground> 
      <h1 class="Gradient">Zachary Howell</h1>
      {props.children}
    </header>


  );
}

export default Header;
