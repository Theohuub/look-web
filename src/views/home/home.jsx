import React from "react";
import {  Button,
  Container,
  Divider,
  Search,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Advertisement } from 'semantic-ui-react';
  import { Link, useLocation } from "react-router-dom";
  
  const colors = [
    'green',  
  ]

class Home extends React.Component{
    
    render(){
        return(        
            <div>
                 
                 <Segment>
                 <Image src= '/icone.png' size='small' centered/>
                 <br></br>
                 <Container text>
                 <Header as='h2'>Look!</Header>
              <p>
               <b>A startup pode resolver o problema de falta de transparência nos preços de produtos oferecidos por diferentes lojas,
               a dificuldade em comparar preços e encontrar as melhores ofertas, o que pode resultar em gastos excessivos.</b>
              </p>
 
  </Container>
          <br></br>
 
  </Segment>
            <Segment placeholder>
            <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Ou</Divider>        
            <Grid.Row verticalAlign='middle'>
                
              <Grid.Column>
                <Header icon>
                  <Icon name='search' />
                    Pesquise um produto
                </Header>
      
                <Search placeholder='Pesquisar...'/>
              </Grid.Column>
      
              <Grid.Column>
                <Header icon>
                  <Icon name='shopping basket' />
                  Anuncie sua loja
                </Header>
                
                <Button 
                
                inverted color={'green'}
                content='green'
                >
                <Link to={'/form-loja'}>Anunciar</Link>
                </Button>
                
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Segment>
          <br></br>

     
          </div>
        )
          }
  }



export default Home;
