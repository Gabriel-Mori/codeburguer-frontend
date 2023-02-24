import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import formatCurrency from '../../../utils/formatCurrency'
import { FiEdit } from 'react-icons/fi'


import {
  Container,
  Image,
  ButtonEdit

} from './styles'
import api from "../../../service/api";



function ListProducts() {
  const [products, setProducts] = useState()



  useEffect(() => {
    const loadOrder = async () => {
      const { data } = await api.get('/products')

      setProducts(data)
    }

    loadOrder()
  }, [])

  const isOffer = (offer) => {
    if (offer) {
      return <CheckCircleOutlineIcon style={{ color: 'green' }} />
    }
    return <HighlightOffIcon style={{ color: 'red' }} />
  }



  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center" >Produto em oferta</TableCell>
              <TableCell align="center" >Imagem</TableCell>
              <TableCell align="center" >Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products && 
             products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                <TableCell align="center"> <Image src={product.url} alt="Imagem do produto" />
                </TableCell>
                <TableCell align="center"><ButtonEdit> <FiEdit size={20} /> </ButtonEdit></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Container>
  )

}

export default ListProducts