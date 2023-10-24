import '../css/index.css'

import Profile from './profile'
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css'

import Folder from './folder'

import Modal from './modal'

function Konten(){
    return(
  
  
        <Container>

          
          <div className='profile'>
            <Profile/>
          </div>
          <Modal/>
          <div className='logo'>
  
          <Folder/>
          <Folder/>
          <Folder/>
          <Folder/>
          <Folder/>
          <Folder/>
          <Folder/>
          <Folder/>
          <Folder/>
          <Folder/>
          
          </div>
       
          
{/*    
      <div className="row">
        <div className='column'>
        <Row className='textFile'>
          <Col>
          <div className='logo'>
    <a href="/folder">
        <FcFolder/>
    
    </a>
   
    </div>
            New File
          </Col>
          // <Col sm><Folder/>
          //   New File
          // </Col>
          <Col sm><Folder/>
            New Folder
          </Col>
          <Col sm><Folder/>
            New Folder
          </Col>
          <Col sm><Folder/>
            New Folder
          </Col>
          
        </Row>
        </div>
        <div className='column'>
        <br />
        <br />
        <Row className='textFile'>
          <Col sm><File/>
            New File
          </Col>
          <Col sm><File/>
            New File
          </Col>
          <Col sm><File/>
            New File
          </Col>
          <Col sm><File/>
            New File
          </Col>
          <Col sm><File/>
            New File
          </Col>
          
        </Row>
        </div>
        </div>
        <MenuBawah/> */}
      </Container>
      
    )
}

export default Konten