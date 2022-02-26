import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*{
		padding: 0px;
		margin: 0px;
		box-sizing:border-box;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		
	
	}
	body {
		background-color: #f9fafb;
	}

`;
export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;
