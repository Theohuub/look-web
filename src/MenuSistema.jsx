import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Dropdown, Input, Menu } from 'semantic-ui-react';

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  


  render() {
    const { activeItem } = this.state
   
    return (
      <div>
      <Menu inverted>

     <Menu.Item
    
     icon='box'
       name='Adicionar Produto'
       active={activeItem === 'produtos'}
       onClick={this.handleItemClick}
       as={Link}
       to='/form-produto'
     />
     <Menu.Item icon='tasks'
       name='Produtos Cadastrados'
       active={activeItem === 'editarProduto'}
       onClick={this.handleItemClick}
       as={Link}
       to='/list-produto'
     />
   </Menu>
    
     <div>
     
     <Menu position='left' stackable size='huge' color='green' inverted >
     <Menu.Item  >
       <img alt="logo" src='/iconeApp.png'       
       /> OOK!
     </Menu.Item>

     <Menu.Item position='left'
      icon='home'
       name='Página Inicial'
       active={activeItem === 'editarProduto'}
       onClick={this.handleItemClick}
       as={Link}
       to='/'

     />
    
     <Menu.Item>
     <Input className='icon' icon='search' placeholder='Pesquisar...' />
     
     </Menu.Item>

     <Menu.Item>
     <Dropdown item text='Categorias' >
     <Dropdown.Menu>
     <Dropdown.Item>Alimentos</Dropdown.Item>
     <Dropdown.Item>Tecnologia</Dropdown.Item>
     <Dropdown.Item>Casa</Dropdown.Item>
     </Dropdown.Menu>
     </Dropdown>
     </Menu.Item>

     <Menu.Menu position='right'>
     <Menu.Item icon='user circle'
       name='Entrar'
       active={activeItem === 'login'}
       onClick={this.handleItemClick}
       as={Link}
       to='/cadastro'
     />

     <Menu.Item icon='shopping basket'
       name='Registre sua Loja'
       active={activeItem === 'loja'}
       onClick={this.handleItemClick}
       as={Link}
       to='/form-loja'
     />
     </Menu.Menu>
     </Menu>
     </div>
     <br></br>

   </div>

    )
  }
}