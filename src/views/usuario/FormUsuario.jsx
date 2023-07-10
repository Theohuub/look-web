import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon, Segment,Header,Modal } from 'semantic-ui-react';
import {mensagemErro, notifyError, notifySuccess } from '../../views/util/Util';
import { ENDERECO_API } from '../../views/util/Constantes';

export default function FormUsuario () {

	const { state } = useLocation();

	const [idUsuario, setIdUsuario] = useState();
	const [nome, setNome] = useState();
	const [cpf, setCpf] = useState();
	const [dataNascimento, setDataNascimento] = useState();
    const [email, setEmail] = useState();
	const [foneCelular, setFoneCelular] = useState();
	const [foneFixo, setFoneFixo] = useState();
    const [senha, setSenha] = useState();

	useEffect(() => {

		if (state != null && state.id != null) {
			
			axios.get(ENDERECO_API + "api/usuario/" + state.id)
			.then((response) => {
				setIdUsuario(response.data.id)
				setNome(response.data.nome)
				setCpf(response.data.cpf)
				setDataNascimento(formatarData(response.data.dataNascimento))
				setEmail(response.data.email)
                setFoneCelular(response.data.foneCelular)
				setFoneFixo(response.data.foneFixo)
                setSenha(response.data.senha)
			})
		}
		
	}, [state])

	function salvar() {

		let usuarioRequest = {

			nome: nome,
			cpf: cpf,
			dataNascimento: dataNascimento,
            email: email,
			foneCelular: foneCelular,
			foneFixo: foneFixo,
            senha: senha
		}

		if (idUsuario != null) { //Alteração:

			axios.put(ENDERECO_API + "api/usuario/" + idUsuario, usuarioRequest)
			.then((response) => {
				notifySuccess('Usuario alterado com sucesso.')
				})
				.catch((error) => {
				if (error.response) {
				notifyError(error.response.data.errors[0].defaultMessage)
				} else {
				notifyError(mensagemErro)
				} 
				})
				

		} else { //Cadastro:
			
			axios.post(ENDERECO_API + "api/usuario", usuarioRequest)
			.then((response) => {
				notifySuccess('Usuario cadastrado com sucesso.')
				})
				.catch((error) => {
				if (error.response) {
				notifyError(error.response.data.errors[0].defaultMessage)
				} else {
				notifyError(mensagemErro)
				} 
				})
				
		}
	 }

	function formatarData(dataParam) {

        if (dataParam == null || dataParam == '') {
            return ''
        }
        
        let dia = dataParam.substr(8,2);
        let mes = dataParam.substr(5,2);
        let ano = dataParam.substr(0,4);
        let dataFormatada = dia + '/' + mes + '/' + ano;

        return dataFormatada
    }

	const [open, setOpen] = React.useState(false)
	
	return(
		<div>

			<div style={{marginTop: '3%'}}>

				<Container textAlign='justified' >

					{ idUsuario === undefined &&
						<h2> <span style={{color: 'darkgray'}}> Cadastro &nbsp;<Icon name='angle double right' size="small" />Usuário</span> </h2>
					}
					{ idUsuario != undefined &&
						<h2> <span style={{color: 'darkgray'}}> Usuário &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
					}

					<Divider />

					<div style={{marginTop: '4%'}}>
					<Segment color='green' >
						<Form>

							<Form.Group widths='equal'>

								<Form.Input
									required
									fluid
									label='Nome'
									placeholder='Informe seu nome'
									maxLength="100"
									value={nome}
									onChange={e => setNome(e.target.value)}
								/>

								<Form.Input
									fluid
									label='CPF'>
									<InputMask 
										mask="999.999.999-99"
										value={cpf}
										onChange={e => setCpf(e.target.value)}
									/> 
								</Form.Input>

                                <Form.Input
									fluid
									label='Data Nascimento'
									width={6}
									
								>
									<InputMask 
										mask="99/99/9999" 
										maskChar={null}
										placeholder="Ex: 20/10/2023"
										value={dataNascimento}
										onChange={e => setDataNascimento(e.target.value)}
									/> 
								</Form.Input>

                                <Form.Input
									type="email"
									required
									fluid
									label='Email'
									placeholder='Informe seu Email'
									maxLength="100"
                                    width={6}
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>

							</Form.Group>
							
							<Form.Group>

								<Form.Input
									fluid
									label='Fone Celular'
									width={6}>
									<InputMask 
										mask="(99) 9999.9999" 
										value={foneCelular}
										onChange={e => setFoneCelular(e.target.value)}
									/> 
								</Form.Input>

								<Form.Input
									fluid
									label='Fone Fixo'
									width={6}>
									<InputMask 
										mask="(99) 9999.9999"
										value={foneFixo}
										onChange={e => setFoneFixo(e.target.value)}
									/> 
								</Form.Input>

                                
                                <Form.Input
									type="password"
									required
									fluid
									label='Senha'
                                    width={6}
									maxLength="8"
									placeholder="Senha de no máximo 8 caracteres!"
									value={senha}
									onChange={e => setSenha(e.target.value)}
								/>
								

							</Form.Group>

							<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

							<Button.Group>
								<Button
									animated='vertical'						
									type="button"
									inverted
									circular
									icon
									labelPosition='left'
									color='red'
								>
									<Icon name='reply' />
									<Link to={'/cadastro'}>Voltar</Link>
								</Button>		
								<Button.Or />
								<Modal
      closeIcon
      open={open}
      trigger={<Button
	  onClick={() => salvar()}
	  color='green'
	  >
		<Icon name='save' />
		Salvar</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='add user' content=' Usuário cadastrado com sucesso!' />
      <Modal.Content>
        <b><p>
		Você pode registrar sua loja ou voltar para página inicial.
        </p></b>
      </Modal.Content>
      <Modal.Actions>
        <Button color='blue' inverted onClick={() => setOpen(false)}
		 as={Link}
		 to='/'>
          <Icon name='home' />Página Inicial
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)}
		 as={Link}
		 to='/form-loja'
		>
          <Icon name='shopping basket' />Registrar Loja
        </Button>
      </Modal.Actions>
    </Modal>
							</Button.Group>
								<Container textAlign='right'>
									
									
									
								</Container>

							</Form.Group>

						</Form>
					</Segment>	
					</div>
				</Container>
			</div>
		</div>
	)
	
}