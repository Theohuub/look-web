import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './views/home/home';
import FormProduto from './views/produto/FormProduto';
import FormUsuario from './views/usuario/FormUsuario';
import FormLoja from './views/loja/FormLoja';
import Cadastro from './views/Cadastro';
import ListProduto from './views/produto/ListProduto';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                
                <Route path="form-usuario" element={ <FormUsuario/> } />
                
                <Route path="form-loja" element={ <FormLoja/> } />
                
                <Route path="cadastro" element={ <Cadastro/> } />
            </Routes>
        </>
    )
}

export default Rotas
