import React from 'react';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

export default function Cabecalho() {
    return (
        <div className="cabecalho">
            <a 
                href="/home"
                className="logo"
            >
                <FontAwesomeIcon icon={faCartArrowDown} size="2x"/>
                <span>Soft_Vendas</span>
            </a>
            <div className="notificacoes"></div>
            <div className="config-usuario">Melquisedeque Pereira França</div>
        </div>
    )
}