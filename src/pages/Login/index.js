import React from 'react';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import imagemBackground from '../../images/backgroundDolar.png';

export default function Login() {
    return (
        <div 
            className="corpo"
            style={{backgroundImage: `url(${imagemBackground})`, backgroundSize: 'contain'}}
        >
            
            <div className="formulario-login">
                <div className="logo">
                    <FontAwesomeIcon icon={faCartArrowDown} size="2x" />
                    <span>Soft_Vendas</span>
                </div>
                <form action="">
                    <input 
                        type="text" 
                        className="form-input"
                        placeholder="E-mail"
                    />
                    <input 
                        type="text" 
                        className="form-input"
                        placeholder="Senha"
                    />

                    <button type="submit" className="btn-login btn-confirma">Entrar</button>
                </form>
            </div>
        </div>
    )
}