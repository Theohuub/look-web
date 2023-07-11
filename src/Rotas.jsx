import React from 'react';
import { Route, Routes } from "react-router-dom";
import Cadastro from './views/Cadastro';
import FormCategoriaProduto from './views/categoriaProduto/FormCategoriaProduto';
import ListCategoriaProduto from './views/categoriaProduto/ListCategoriaProduto';
import Home from './views/home/home';
import FormLoja from './views/loja/FormLoja';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import FormUsuario from './views/usuario/FormUsuario';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-produto" element={ <ListProduto/> } />

                <Route path="form-categoria-produto" element={ <FormCategoriaProduto/> } />
                <Route path="list-categoria-produto" element={ <ListCategoriaProduto/> } />
                
                <Route path="form-usuario" element={ <FormUsuario/> } />
                
                <Route path="form-loja" element={ <FormLoja/> } />
                
                <Route path="cadastro" element={ <Cadastro/> } />
            </Routes>
        </>
    )
}

export default Rotas
