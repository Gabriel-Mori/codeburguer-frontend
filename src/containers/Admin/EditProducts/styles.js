import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;



form {
  background: #FFFFfd;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 10px 10px 14px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 25px;
}
`



export const Label = styled.p`
font-size: 18px;
font-weight: 400;
color: #17202A;
margin-bottom: 5px;

`



export const Input = styled.input`
font-size: 20px;
padding: 15px;
width: 100%;
height: 50px;
border: 1px solid #9CA3AF;
box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
border-radius: 8px;
min-width: 280px;
appearance: none;




`

export const LabelUpload = styled.label`
cursor: pointer;
display:flex;
align-items: center;
border: 1px dashed #9CA3AF;
border-radius: 5px;
padding: 10px;
gap: 20px;
padding-left: 77px;

input {
  opacity: 0;
  width: 1px;
}
`

export const ContainerInput = styled.div`
display: flex;
align-items: baseline;
gap: 10px;

input {
  width: 15px;
  height: 15px;
  cursor: pointer;
}

`


