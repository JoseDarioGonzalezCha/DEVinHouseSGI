import React from 'react';
import { NavLink } from 'react-router-dom';

import { StyledHeader, StyledContainer, StyledMenu } from './Navbar.styles';

export const Navbar = () => {
	return (
		<StyledHeader>
			<StyledContainer>
			<h1>
				<NavLink to="/">SGI</NavLink>
			</h1>
			<StyledMenu>
					<NavLink to="/">Empresa</NavLink>
					<NavLink to="produto">Produto</NavLink>
					<NavLink to="map">Mapa</NavLink>
					<NavLink to="listaproduto">Lista de Produtos</NavLink>
			</StyledMenu>
			</StyledContainer>
		</StyledHeader>
	)
}