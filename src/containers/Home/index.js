import React from "react";
import homeLogo from '../../assets/homelogo.jpeg'
import CategoryCarrousel from "../../components/CategoryCarrousel";

import {
  HomeImg,
  Container,
} from './styles'
import OffersCarrousel from "../../components/OfferCarrousel";



function Home(){



return (
  <Container>
    <HomeImg src={homeLogo} alt="logo da pagina inicial" />
   <CategoryCarrousel/>
   <OffersCarrousel/>


  </Container>
)

}

export default Home