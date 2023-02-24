import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import paths from '../../constants/paths';

const listLink = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Orders,
    icon: ShoppingBagOutlinedIcon
  },
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.Products,
    icon: ShoppingCartOutlinedIcon
  },
  {
    id: 3,
    label: 'Novo Produtos',
    link: paths.NewProducts,
    icon: AddCircleOutlineIcon
  } 
]

export default listLink