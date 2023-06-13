import React from 'react';
import { Segment } from 'semantic-ui-react';
import './App.css';
import MenuSistema from './MenuSistema';
import Rotas from './Rotas';

function App() {
  return (
    <div className="App">
    
    <MenuSistema />
    
    <Rotas />

    <div style={{marginTop: '6%'}}>
        <Segment inverted color='green'tertiary size='tiny' textAlign='center'>
          &copy; 2023 - Projeto LOOK! - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>

 
);
}


export default App;
