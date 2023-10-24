import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import PropagateLoader from "react-spinners/PropagateLoader";
import Login from './loginn'
import Sidenav from './component/sidenav'
import Admin from './admin/admin'
import Tambahdata from './component/tambahData'
import HalamanFolder from './component/halFolder'
import Database from "./component/ambilDatabase";
// import {auth} from './config/fire.js'
import {getAuth, onAuthStateChanged } from 'firebase/auth'



import Regis from './register'
function App() {
  const [isLogin , setIsLogin] = useState(false)
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
const auth = getAuth()
onAuthStateChanged (auth, (result) => {
  if(result){
    setIsLogin(true)
    return
  }
  setIsLogin(false)
// if(result){
//   setIsLogin(true),
//   setLoading(false)
//   return

// }
// setIsLogin(false),
// setLoading(false)
})

  }, [])
// if(loading){
//   return(
//     <div style={{textAlign:'center', alignItems:'center'}}>
//       loading bro.......
//     </div>
//   )
// }



  // const [loading, setLoading] = useState(false);
  // useEffect(()=>{
  // setLoading(true)
  // setTimeout(()=>{
  // setLoading(false)
  // },1000)
  // }, [])
  
  return (
    <>
    {isLogin ? (
        <Router>
          
        <Routes>
     
         <Route path='/menu' element={<Sidenav/>}/>
         <Route path='database' element={<Database/>}/>
         <Route path='/folder' element={<HalamanFolder/>}/>
         <Route path='/tambahdata' element={<Tambahdata/>}/>
         <Route path='/admin' element={<Admin/>}/>
         <Route path='/' element={<Sidenav/>}/>
         
      
        </Routes>
      </Router>
    ) : 
    (
      <Router>
          
      <Routes>
      <Route path='/' element={<Login/>}/>
       
       <Route path='/register' element={<Regis/>}/>

        <Route path='*' element={<Regis/>}/>
    
    
      </Routes>
    </Router>
    )}
    </>
   
       
  
       
     
      
        

        
  )
}

export default App
