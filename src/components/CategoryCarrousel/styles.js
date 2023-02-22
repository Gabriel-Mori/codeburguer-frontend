import styled from 'styled-components'

export const Container = styled.div`
background: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35px 0;

.rec.rec-arrow {
background: #17202A;
color: #FFFF
}

.rec.rec-arrow:hover {
  opacity: 0.8;
}

.rec.rec-arrow:disabled {
background: #bebebf;
}

.rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px  gray; 
}

`

export const CategoryImg = styled.img`

`

export const ContainerItems = styled.div`
display: flex;
flex-direction: column;

`


export const ImageCarroseul = styled.img`
width: 300px;
border-radius: 20px;
`



