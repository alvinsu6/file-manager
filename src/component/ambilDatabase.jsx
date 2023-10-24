import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import  { useEffect } from "react"
import { useState } from "react"
import { db } from "../config/fire";
import Table from 'react-bootstrap/Table';
import { Button} from 'react-bootstrap';
import '../css/login.css'
import { Link } from "react-router-dom";
 function AmbilDatabase() {
    const [newName, setNewName ] = useState("");
    const [newAlamat, setNewAlamat ] = useState("");
    const [newAge, setNewAge ] = useState(0);
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const CreateUser = async () => {
      await addDoc(usersCollectionRef, {name: newName, age: Number (newAge), Alamat: newAlamat})
    }

    const DeleteData = async (id) =>{
      const userDoc = doc(db, "users", id)
      await deleteDoc(userDoc)
    }
    const UpdateData = async (id, age) => {
      const userDoc = doc(db, "users", id)
      const newFields = {age : age + 1}
      await updateDoc (userDoc,newFields)
    }
    useEffect (() => {

const getUsers = async()=>{
 
const data = await getDocs(usersCollectionRef);
setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
};
getUsers()
    })


  return (
   
    <div className="celbapl">
        {/* <input placeholder="Name..." onChange={(event)=>{ setNewName(event.target.value) }} />
        <br />
        <input type="number" placeholder="Age..." onChange={(event)=>{ setNewAge(event.target.value) }}/>
        <br />
        <input type="text" placeholder="Alamat..." onChange={(event)=>{ setNewAlamat(event.target.value) }}/>
        <button onClick={CreateUser}>create</button> */}
        
       {/* {users.map((user)  =>  {
        
      return ( 
        <React.Fragment key={user.name}>
          <h1> Name: {user.name } </h1>
          <h1> age: {user.age} </h1>
          <h1> Alamat: {user.Alamat} </h1>
          <button onClick={()=>{
            UpdateData(user.id, user.age)
          }}>ubah</button>
           <button onClick={()=>{
            DeleteData(user.id)
          }}>hapus</button>

          </React.Fragment>
      );
      
      
      })} */}
      <br />
      <br />
        <div className="Table">
        <Table striped="columns">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Umur</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {users.map((user)=>{
            return(
              <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.Alamat}</td>
              <td>
            <Button  onClick={()=>{
               DeleteData(user.id)
               }}>🗑
             </Button>
          &nbsp;
            <Button onClick={()=>{
            UpdateData(user.id, user.age)
          }}>
              
              ✏

            </Button>
          
              </td>
              
            </tr>
            )
           })}
          </tbody>
        </Table>
        <Link to="/tambahdata">
      <button className='butonAtas' > Tambah Data +</button>
      </Link>
        </div>

    </div>
  )
}
export default AmbilDatabase