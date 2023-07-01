import { createGlobalStyle } from "styled-components";
import eot from '../assets/fonts/9840b3cd3186706467035c79a0effe36.eot'
import woff2 from '../assets/fonts/9840b3cd3186706467035c79a0effe36.eot'
import woff from '../assets/fonts/9840b3cd3186706467035c79a0effe36.eot'
import ttf from '../assets/fonts/9840b3cd3186706467035c79a0effe36.eot'

export const GlobalFonts = createGlobalStyle `
    @font-face {
    font-family: "a Regular";
     src: url(${eot});
     src: url(${eot}), 
     url(${woff2}),
     url(${woff}),
     url(${ttf}), 
  }
`