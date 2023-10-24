import {useEffect, useState} from 'react'

function Tesdas() {
     //state
  const [user, setUser] = useState()
  //cycle
  useEffect (() => {
setUser(JSON.parse(localStorage.getItem('user')))
  }, [])
  return (
    <div>
     <h1>tesdas </h1>   
    <img src={user?.photoURL} alt="celleng" />
    <h3>{user?.email}</h3>

    </div>
  )
}

export default Tesdas