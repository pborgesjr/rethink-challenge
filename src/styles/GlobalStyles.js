import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
	*:focus {
		outline: 0;
	}
	html, body, #root {
    background: linear-gradient(to right, #34b1e3, #24708f);
    font-size: 62.5%;
    height: 100%;
	}
	body {
		-webkit-font-smoothing: antialiased;
	}
	 body, input, button {
		font-family: 'Roboto', sans-serif;
  }

	a {
		text-decoration: none;
	}
	ul {
		list-style: none;
	}
	button {
		cursor: pointer;
	}
  :root {
    --color-primary: #34b1e3;
    --color-secondary: #24708f;
    --color-font-primary: #424242;
    --color-font-secondary: #212121;
    --color-border: #c4c4c4;
    --color-white: #fff;
    --color-button-unhovered: #237a3b;
    --color-button-hovered: #30ab51;
    --box-shadow: 5px 5px 5px 0px rgba(33, 33, 33, 0.4);
  }
`;
