import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const colors = [
    'green',  
  ]

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
      <Menu color={'green'} inverted>
        <Menu.Item>
          <img alt="logo" src='/iconeApp.png' />
          

        </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link}
          to='/'
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='usuarios'
          active={activeItem === 'usuarios'}
          onClick={this.handleItemClick}
          as={Link}
          to='/form-usuario'
        >
          Cadastre-se
        </Menu.Item>

        <Menu.Item
          name='produtos'
          active={activeItem === 'produtos'}
          onClick={this.handleItemClick}
          as={Link}
          to='/form-produto'
        >
          Inserir Produto
        </Menu.Item>

        <Menu.Item
          name='lojas'
          active={activeItem === 'lojas'}
          onClick={this.handleItemClick}
          as={Link}
          to='/form-loja'
        >
          Inserir Loja
        </Menu.Item>


      </Menu>
      
    )
  }
}