import React from 'react';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

export default function Cabecalho() {
    return (
        <div className="cabecalho">
            <a 
                href="/home"
                className="logo"
            >
                <FontAwesomeIcon icon={faCartPlus} size="3x"/>
                <span>Soft_Vendas</span>
            </a>
            <div className="config-usuario">Usuario</div>
        </div>
    )
}