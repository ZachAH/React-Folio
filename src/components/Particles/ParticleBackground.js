import React from 'react';
import Particles from 'react-tsparticles';
import '../../components/Particles/style.css'
import particlesConfig from '../../config/particle-config';

export default function ParticlesBackground() {
    return (
        <Particles params={particlesConfig} id="particles-js"></Particles>
    );
}