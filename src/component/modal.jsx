import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from './dropdown'
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Tambah File +
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Unggah File</Modal.Title>
        </Modal.Header>
        <Modal.Body><Dropdown/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;