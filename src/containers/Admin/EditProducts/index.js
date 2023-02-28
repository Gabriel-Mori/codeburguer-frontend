import React, { useEffect, useState } from "react";
import { Controller, useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import api from "../../../service/api";
import { Button } from '../../../components/Button'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Select from 'react-select'
import * as Yup from 'yup'
import {ErrorMessage}  from '../../../components/ErrorMessage';
import { yupResolver } from '@hookform/resolvers/yup'

import {
  Container,
  Input,
  Label,
  LabelUpload,
  ContainerInput
} from './styles'
import { toast } from "react-toastify";



function EditProducts() {
  const {push, location: {
    state: { product }
  }} = useHistory()
  const [categories, setCategories] = useState([])
  const [fileName, setFileName] = useState(null)


    const schema = Yup.object({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    offer: Yup.bool()
  })

 const { register, handleSubmit, control, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async (data) =>  {
     const productDataFormData =  new FormData() 

     productDataFormData.append('name', data.name)
     productDataFormData.append('price', data.price)
     productDataFormData.append('category_id', data.category.id)
     productDataFormData.append('file', data.file[0])
     productDataFormData.append('offer', data.offer)
     

     await toast.promise(api.put(`/products/${product.id}`, productDataFormData), {
        pending: 'Editando novo produto',
        success: 'Produto editado com sucesso',
        error: 'Falha ao tentar editar produto, tente novamente!'
     }) 
     
     setTimeout(() => {
     push('/lista-de-produtos')
     }, 2000)
    
  }

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('/categories')

      setCategories(data)
    }

    loadCategories()
  }, [])




  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        
        <div>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} defaultValue={product.name} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

         <div>
        <Label>Preço</Label>
        <Input type="number" {...register('price')}  defaultValue={product.price} />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>
         </div>

      <div>
        <LabelUpload>
          {fileName || (
            <>
              <CloudDownloadIcon />
              upload de imagem
            </>
            )}

          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={(value) => {
              setFileName(value.target.files[0]?.name)
            }}

          />
        </LabelUpload>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>
          </div>

      <div>
        <Controller
          name='category'
          control={control}
          defaultValue={product.category} 
          render={({ field }) => {
            return (
              <Select
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={value => value.id}
                placeholder='Escolha a categoria'
                defaultValue={product.category} 
              />
            )
          }}
        >
        </Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
       </div>
       <ContainerInput>

       <input 
       type="checkbox"  
       {...register('offer')}
       defaultChecked={product.offer}
       
       />
       <Label>Produto em oferta</Label>

       </ContainerInput>

        <Button style={{ marginTop: '30px' }}>Editar Produto</Button>
      </form>
    </Container>
  )

}

export default EditProducts