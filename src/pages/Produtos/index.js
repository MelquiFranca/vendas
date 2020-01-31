import React from 'react';

import Formulario from '../../components/Formulario';
import Cabecalho from '../../components/Cabecalho';

import './style.css';

export default function Produtos() {
    return (
        <div className="home-produtos">
            <Cabecalho />
            <div className="home-produtos-corpo">
                <Formulario /> 
                <div className="lista-produtos">
                    <h2>Lista de Produtos</h2>
                </div>
            </div>
        </div>
    )
}