import React from 'react';

import './style.css';
import imagemBackground from '../../images/backgroundDolar.png';

export default function Login() {
    return (
        <div 
            className="corpo"
            style={{backgroundImage: `url(${imagemBackground})`, backgroundSize: 'contain'}}
        >
            Login
        </div>
    )
}