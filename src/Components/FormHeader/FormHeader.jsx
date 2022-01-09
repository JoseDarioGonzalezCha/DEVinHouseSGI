import React from 'react'
import { FormHeaderStyled } from './FormHeader.styles'

export const FormHeader = () => {
	return (
		<FormHeaderStyled>
			<h2>Nova empresa</h2>
			<div>
			<button>Cancelar</button>
			<button>Cadastrar</button>
			</div>
		</FormHeaderStyled>
	)
}
