import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import api from "../../../service/api";
import { Button } from '../../../components/Button'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import {
  Container,
  Input,
  Label,
  LabelUpload


} from './styles'
import Select from 'react-select'



function NewProducts() {
  const { register, handleSubmit } =useForm()
  const [products, setProducts] = useState()
  const [fileName, setFileName] = useState(null)


  const onSubmit = (data) => console.log(data)


  useEffect(() => {
    const loadOrder = async () => {
      const { data } = await api.post('/products', {

      })

      setProducts(data)
    }

    loadOrder()
  }, [])



  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />

        <Label>Preço</Label>
        <Input type="number" {...register('price')}  />

        <LabelUpload>
          { fileName ||  (
            <>
            <CloudDownloadIcon/>
            upload de imagem
            </>
            
            )
            
          }
          <input  
          type="file" 
          accept="image/png, image/jpeg"
          {...register('file')}
          onChange={(value) => {
            setFileName(value.target.files[0]?.name)
          }}
          
          />
         </LabelUpload> 
        <Select />

        <Button style={{marginTop: '30px'}}>Adicionar Produto</Button>
      </form>
    </Container>
  )

}

export default NewProducts