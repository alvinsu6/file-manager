import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProSidebarProvider } from 'react-pro-sidebar'
// import firebase from './config/fire.js'

// console.log('firebase config ==>',firebase)
import {auth} from './config/fire'
console.info(auth);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProSidebarProvider>
    <App />
    </ProSidebarProvider>

)
