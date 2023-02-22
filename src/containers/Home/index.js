import React from "react";
import homeLogo from '../../assets/homelogo.jpeg'
import {CategoryCarrousel, OffersCarrousel} from "../../components";

import {
  HomeImg,
  Container,
} from './styles'



export function Home(){
return (
  <Container>
    <HomeImg src={homeLogo} alt="logo da pagina inicial" />
   <CategoryCarrousel/>
   <OffersCarrousel/>


  </Container>
)

}

