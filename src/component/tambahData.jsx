import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addDoc, collection, getDocs } from "firebase/firestore";
import  { useEffect } from "react"
import { useState } from "react"
import { db } from "../config/fire";
function FormFloatingCustom() {

  const [newName, setNewName ] = useState("");
    const [newAlamat, setNewAlamat ] = useState("");
    const [newAge, setNewAge ] = useState(0);
    const [ setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const CreateUser = async () => {
      await addDoc(usersCollectionRef, {name: newName, age: Number (newAge), Alamat: newAlamat})
    }

    useEffect (() => {

      const getUsers = async()=>{
       
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
      };
      getUsers()
          })

  return (
    <div> 

    <div className='TambahData'>
  
   <h1 className='jdl'>Tambah Data User</h1>
   <br/>
        
          <Form.Select >
            <option>Pilih Role </option>
            <option value="1">Admin</option>
            <option value="2">User</option>
            
          </Form.Select>
          <br/>
     
      <h2 className='h2Tambah'> &nbsp;&nbsp;Nama</h2>
      <Form.Floating className="name">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name..."
          onChange={(event)=>{ setNewName(event.target.value) }}
        />
        <label htmlFor="floatingInputCustom">Masukan nama</label>
      </Form.Floating>
      <br/>
      <h3 className='h3Tambah'>&nbsp;&nbsp;Umur</h3>
      <Form.Floating className="email">
        <Form.Control
          id="floatingInputCustom"
          type="number"
          placeholder="Age..."
          onChange={(event)=>{ setNewAge(event.target.value) }}
        />
        <label htmlFor="floatingInputCustom">Masukan Umur </label>
      </Form.Floating>
      <br/>
      <h4 className='h4Tambah'>&nbsp;&nbsp;Email</h4>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="email"
          placeholder="Alamat..."
          onChange={(event)=>{ setNewAlamat(event.target.value) }}
        />
        <label htmlFor="floatingPasswordCustom">Masukan Email</label>
      </Form.Floating>
      <br />
      <br />
      <Link to="/admin">
      
      <Button  onClick={CreateUser} >Tambah +</Button>
      </Link>
    </div>
    </div>
  );
}

export default FormFloatingCustom;