import React from 'react';
import ParticlesBackground from '../Particles/ParticleBackground';

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
