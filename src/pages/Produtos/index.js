import React from 'react';

import Formulario from '../../components/Formulario';
import Cabecalho from '../../components/Cabecalho';
import Lista from '../../components/Lista';

import imagemBackground from '../../images/backgroundDolar.png';

import './style.css';

export default function Produtos() {
    return (
        <div 
            className="home-produtos"
            style={{backgroundImage: `url(${imagemBackground})`, backgroundSize: 'contain'}}
        >
            <Cabecalho />
            <div className="home-produtos-corpo">
                <Formulario /> 
                <Lista dados={PRODUTOS} titulo="Lista de Produtos"/>                
            </div>
        </div>
    )
}


const PRODUTOS = [
    {
        id: 1,
        nome: 'Biscoito Trakinas',
        descricao: 'Biscoito recheado de 200gr',
        categoria: 'Alimentos',
        valorCompra: 1.50,
        valorVenda: 2.99,
        unidadeMedida: 'Unidades',
        estoque: 50,
    },
    {
        id: 2,
        nome: 'Biscoito Piraquê',
        descricao: 'Biscoito recheado de 200gr',
        categoria: 'Alimentos',
        valorCompra: 1.50,
        valorVenda: 2.99,
        unidadeMedida: 'Unidades',
        estoque: 44,
    },
    {
        id: 3,
        nome: 'Biscoito Cheetos Requeijão',
        descricao: 'Biscoito recheado de 200gr',
        categoria: 'Alimentos',
        valorCompra: 1.50,
        valorVenda: 2.99,
        unidadeMedida: 'Unidades',
        estoque: 26,
    },
    {
        id: 4,
        nome: 'Biscoito Batata Ruffles',
        descricao: 'Biscoito recheado de 200gr',
        categoria: 'Alimentos',
        valorCompra: 1.50,
        valorVenda: 2.99,
        unidadeMedida: 'Unidades',
        estoque: 13,
    },
];