import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
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
			.then((response) => { console.log('Usuario alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alter um usuário.') })

		} else { //Cadastro:
			
			axios.post(ENDERECO_API + "api/usuario", usuarioRequest)
			.then((response) => { console.log('Usuário cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o usuário.') })
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
										placeholder="Ex: 20/03/1985"
										value={dataNascimento}
										onChange={e => setDataNascimento(e.target.value)}
									/> 
								</Form.Input>

                                <Form.Input
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

								<Button
									type="button"
									inverted
									circular
									icon
									labelPosition='left'
									color='orange'
								>
									<Icon name='reply' />
									<Link to={'/'}>Voltar</Link>
								</Button>

								<Container textAlign='right'>
									
									<Button
										inverted
										circular
										icon
										labelPosition='left'
										color='blue'
										floated='right'
										onClick={() => salvar()}
									>
										<Icon name='save' />
										Salvar
									</Button>
									
								</Container>

							</Form.Group>

						</Form>
					</div>
				</Container>
			</div>
		</div>
	)
	
}