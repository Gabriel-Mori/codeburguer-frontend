import styled from 'styled-components'

export const Container = styled.div`
background: #f9f9f9;
border-radius: 30px;
padding: 16px;
width: max-content;
display: flex;
flex-direction: column;
justify-content: space-between;

.container-top {
  display: grid;
  grid-gap: 10px 120px;
  grid-template-areas: 
  'title title'
  'items price'
  'delivery price-delivery';

.title {
  grid-area: title;
  margin-bottom: 15px;
}
.items {
  grid-area: items;
}

.price {
  grid-area: price;

}
.delivery {
  grid-area: delivery;
}

.price-delivery {
  grid-area: price-delivery;
}
}

.container-bottom {
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 25px;
margin-top: 30px;
}




`

