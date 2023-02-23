import React from "react";
import homeLogo from '../../assets/homelogo.jpeg'
import {CategoryCarrousel, Header, OffersCarrousel} from "../../components";

import {
  HomeImg,
  Container,
} from './styles'



export function Home(){
return (
  <Container>
    <Header/>
    <HomeImg src={homeLogo} alt="logo da pagina inicial" />
   <CategoryCarrousel/>
   <OffersCarrousel/>


  </Container>
)

}

