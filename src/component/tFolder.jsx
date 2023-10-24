import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../css/index.css'
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFolder = () =>{
   
  
    
  }

  return (
    <>
      <Button className='btnFolder' style={{backgroundColor:'rgb(233, 233, 233)',color:'black',borderRadius:'15px',fontWeight:'500'}} onClick={handleShow}>
        + Folder
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Folder Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Folder Tanpa Nama"
                autoFocus
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleFolder}>
            Buat
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;