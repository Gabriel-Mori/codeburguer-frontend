import styled from 'styled-components'

export const Container = styled.div`
background: #f9f9f9;
border-radius: 30px;
padding: 16px;
width: max-content;

`

export const Header = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
padding: 10px;
border-bottom: 3px solid #b5b5b5;
margin-left: 18px;

p{
  font-size: 16px;
  color: #9A9A9D;
}

`
export const Body = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
width: max-content;
grid-gap: 10px 15px;
padding: 10px;


img {
  border-radius: 10px;
  width: 120px;

}

p {
  font-size: 18px;
  color: #17212e;

}

  button {
    height: 30px;
    background: none;
    border: none;
    font-size: 25px;
    cursor: pointer;

  }

.quantity-container {
  display: flex;
  gap: 20px;


  button {
    height: 30px;
    background: none;
    border: none;
    font-size: 25px;
    cursor: pointer;

  }

  p {
    margin-top: 3px;
  }
}

`

export const EmptyCart = styled.p`
align-items: center;
display: flex;
justify-content: center;
text-align: center;
padding: 20px;
font-weight: bold;
`
