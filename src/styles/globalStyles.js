import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';


export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif; 
  outline: none;

   
}

* {
  scrollbar-width: 10px;
  scrollbar-color: #e5e7eb #d1d5db;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
  border-radius: 20px;
}

*::-webkit-scrollbar-track {
  background: #e5e7eb;
  border-radius: 20px;
}

*::-webkit-scrollbar-thumb {
  background-color: #d1d5db;
  border-radius: 20px;
  border: none;
}
`
