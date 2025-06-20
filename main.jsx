mport React from 'react'
mport ReactDOM from 'react-dom/client'
mport App from './App'
mport {BrowserRouter} from "react-router-dom"
eactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
   <BrowserRouter>
     <App />
   </BrowserRouter>
 </React.StrictMode>,
)
