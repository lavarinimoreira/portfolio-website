import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/**============================
#
# global styles
#
#=============================*/



  html, body, #root {
    min-height: 100%;
  }

  html{
    ::-webkit-scrollbar{
      width: 8px;
    }

    ::-webkit-scrollbar-track{
      background: black;
      border-radius: 3rem;
    }

    ::-webkit-scrollbar-thumb{
      background: ${({ theme }) => theme.colors.red};
      border-radius: 3rem;
    }
  }

  body {
    @font-face {
    font-family: 'Eurostile';
    /* src: url('/src/fonts/eurostile/Eurostile.ttf') format('truetype') */
    src: url('/eurostile/Eurostile.ttf') format('truetype')
  }
    h1{
      font-size: 4.5REM;
      font-family: 'Eurostile';
      transform: scale(1, 0.7);
      letter-spacing: -0.05rem;
      text-transform: uppercase;
    }

    h2{
      font-size: 3rem;
      font-family: 'Eurostile';
      transform: scale(1, 0.7);
      letter-spacing: -0.05rem;
      text-transform: uppercase;

      font-weight: bold;

      color: ${({ theme }) => theme.colors.red};
    }

    h3{
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.red};
  }

  h4{
    font-size: 1.25rem;
  }

    p{
      font-size: 1.25rem;
    }
    font-family: 'Eurostile';
    
    width: 100%;
    background: black;

    color: ${(props) => props.theme.colors.white};
    
   
    margin: 0;
    padding: 0;

    *::selection
    {
      color: ${({ theme }) => theme.colors.black};
      text-shadow: none;
      background: white;
    }

    
  }
`;
