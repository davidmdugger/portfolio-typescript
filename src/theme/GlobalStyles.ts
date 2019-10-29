import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Roboto:400,700|Saira+Extra+Condensed:400,700');
  *, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    width: 100%;
    max-width: 2400px;
  }
`;
