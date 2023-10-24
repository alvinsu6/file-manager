
import  { Component } from 'react'

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import './css/login.css'
import firebase from './config/fire'

class Login extends Component {
  

  state = {
    email:'',
    password:''
  }
  handleChangeText = (e) => {
// console.log(e.target.id)
this.setState({
  [e.target.id]: e.target.value,
})
}
//target register
handleRegisterSubmit = (e)=> {
  e.preventDefault();

// console.log('data sebelum:', email, password)

const {email, password} = this.state
firebase.createUserWithEmailAndPassword(email, password) .catch(function(error){
var errorCode = error.code;
var errorMessage = error.message;
console.groupCollapsed(errorCode, errorMessage)
});

  }
    render(){
      
      return(
          <div>
            <MDBContainer className='login' fluid>
      

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className=' text-dark my-5 mx-auto' style={{borderRadius: '2rem', maxWidth: '400px',backgroundColor:' rgba(175, 205, 255, 0.723)'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-black-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' id="email" labelClass='text-dark' label='Email address'  type='email' size="lg"  onChange={this.handleChangeText} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' id="password" labelClass='text-dark' label='Password'  type='password' size="lg" onChange={this.handleChangeText} />

              <p className="small mb-3 pb-lg-2"><a className="text-black-50" href="#!">Forgot password?</a></p>
              {/* <Link to="/menu"> */}
              <button   style={{
                backgroundColor:'rgb(39, 38, 38)',
                borderRadius:'8px',
                fontSize:'20px',
                fontFamily:'sans-serif',
                fontWeight:'bolder',
                color:'grey',
                width:'100px'
                }} >
                Login
              </button>
              {/* </Link> */}
              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0" >Dont have an account? <a onClick={this.handleRegisterSubmit} className="text-white-50 fw-bold">Admin</a></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
          </div>
        )
    }
   
  }

 
  
   
 
export default Login