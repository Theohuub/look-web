import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='green' textAlign='center'>
        <Image src='/icone.png' /> Entre com sua conta
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Digite aqui seu E-mail' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Digite aqui sua senha'
            type='password'
          />

          <Button color='green' fluid size='large'
          as={Link}
          to='/'
          >
            Entrar
          </Button>
        </Segment>
      </Form>
      <Message>
        Não tem uma conta? <a href='/form-usuario'>Cadastre-se</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm