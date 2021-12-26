import React from 'react'
import { StyledContainer } from './Container.styles'

export const Container = ({ children }) => {
	return (
		<StyledContainer>
			{children}
		</StyledContainer>
	)
}
