import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from '../../views/util/Constantes';

export default function FormLoja () {

	const { state } = useLocation();

	const [idLoja, setIdLoja] = useState();
	const [nomeLoja, setNomeLoja] = useState();
	const [enderecoWeb, setEnderecoWeb] = useState();
	const [foneCelular, setFoneCelular] = useState();
	const [foneFixo, setFoneFixo] = useState();
	const [cidadeOrigem, setCidadeOrigem] = useState();
    const [cnpj, setCnpj] = useState();
    const [responsavel, setResponsavel] = useState();

	useEffect(() => {

		if (state != null && state.id != null) {

			axios.get(ENDERECO_API + "api/loja/" + state.id)

			.then((response) => {
			
				setIdLoja(response.data.id)
				setNomeLoja(response.data.nomeLoja)
                setEnderecoWeb(response.data.enderecoWeb)				
				setFoneCelular(response.data.foneCelular)
				setFoneFixo(response.data.foneFixo)
				setCidadeOrigem(response.data.cidadeOrigem)
                setCnpj(response.data.cnpj)
                setResponsavel(response.data.responsavel)
				
			})
		}
	}, [state])

	function salvar() {

		let lojaRequest = {

			nomeLoja: nomeLoja,
			enderecoWeb: enderecoWeb,
			foneCelular: foneCelular,
			foneFixo: foneFixo,
			cidadeOrigem: cidadeOrigem,
            cnpj: cnpj,
            responsavel: responsavel


		}

		if (idLoja != null) { //Alteração:

			axios.put(ENDERECO_API + "api/loja/" + idLoja, lojaRequest)
			.then((response) => { console.log('Produto alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar um loja.') })

		} else { //Cadastro:
			
			axios.post(ENDERECO_API + "api/loja", lojaRequest)
			.then((response) => { console.log('Loja cadastrada com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o loja.') })
		}
	}

	return(
		<div>

			<div style={{marginTop: '3%'}}>

				<Container textAlign='justified' >

					{ idLoja === undefined &&
						<h2> <span style={{color: 'darkgray'}}> Loja &nbsp;<Icon name='angle double right' size="small" />Cadastro</span> </h2>
					}
					{ idLoja != undefined &&
						<h2> <span style={{color: 'darkgray'}}> Loja &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
					}

					<Divider />

					<div style={{marginTop: '4%'}}>

						<Form>

							<Form.Group>
								<Form.Input
									required
									label='Nome Da Loja'
									placeholder='Informe o nome do loja'
									tabIndex='1'
									width={11}
									maxLength="300"
									value={nomeLoja}
									onChange={e => setNomeLoja(e.target.value)}
								/>

								<Form.Input
									required
									fluid
									label='Endereço Web'
									placeholder='Informe o Endereço Web da loja'
									width={5}
									tabIndex='2'
									maxLength='10'
									value={enderecoWeb}
									onChange={e => setEnderecoWeb(e.target.value)}
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
                                </Form.Group>
							
                                <Form.Group>
								
								<Form.Input
									required
									fluid
									label='Cidade de origem'
                                    placeholder='Informe a cidade de origem da loja'
									tabIndex='5'
									name='valorUnitario'
									width={6}
									value={cidadeOrigem}
									onChange={e => setCidadeOrigem(e.target.value)}
								/>

                                    <Form.Input
									fluid
									label='Cnpj'
									width={6}>
									<InputMask 
										mask="99.999.999/9999-99" 
										value={cnpj}
										onChange={e => setCnpj(e.target.value)}
									/> 
								</Form.Input>

                                <Form.Input
									required
									fluid
									label='Responsável'
                                    placeholder='Informe o nome do responsável da loja'
									tabIndex='5'
									name='valorUnitario'
									width={6}
									value={responsavel}
									onChange={e => setResponsavel(e.target.value)}
								/>  
								
				
							</Form.Group>

							<Form.Group widths='equal' style={{marginTop: '4%', justifyContent:'space-between'}}>

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

								<Button
									inverted
									circular
									icon
									labelPosition='left'
									primary
									floated='right'
									onClick={() => salvar()}
									tabIndex='8'>
									<Icon name='save' />
									Salvar
								</Button>

							</Form.Group>

						</Form>
					</div>
				</Container>
			</div>
		</div>
	)
}