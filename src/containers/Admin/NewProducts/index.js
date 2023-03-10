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
  LabelUpload


} from './styles'
import { toast } from "react-toastify";



function NewProducts() {
  const {push} = useHistory()
  const [categories, setCategories] = useState([])
  const [fileName, setFileName] = useState(null)


    const schema = Yup.object({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed().test('required', 'Carregue um arquivo', value => {
    return value && value.length > 0
    })
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
     

     await toast.promise(api.post('/products', productDataFormData), {
        pending: 'Salvando produto',
        success: 'Produto salvo com sucesso',
        error: 'Falha ao tentar salvar produto, tente novamente!'
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
        <Input type="text" {...register('name')} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

         <div>
        <Label>Preço</Label>
        <Input type="number" {...register('price')} />
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
          render={({ field }) => {
            return (
              <Select
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={value => value.id}
                placeholder='Escolha a categoria'
              />
            )
          }}
        >
        </Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
       </div>

        <Button style={{ marginTop: '30px' }}>Adicionar Produto</Button>
      </form>
    </Container>
  )

}

export default NewProducts