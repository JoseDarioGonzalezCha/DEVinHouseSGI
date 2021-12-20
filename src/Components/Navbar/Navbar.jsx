import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (
		<header>
			<ul>
				<li>
					<NavLink to="/">Empresa</NavLink>
				</li>
				<li>
					<NavLink to="produto">Produto</NavLink>
				</li>
				<li>
					<NavLink to="map">Mapa</NavLink>
				</li>
				<li>
					<NavLink to="listaproduto">Lista de Produtos</NavLink>
				</li>
			</ul>
		</header>
	)
}