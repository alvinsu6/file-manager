import ListGroup from 'react-bootstrap/ListGroup';
import Folder from './folder';
function HorizontalExample() {
  return (
    <ListGroup horizontal>
      <ListGroup.Item><Folder/></ListGroup.Item>
      <ListGroup.Item><Folder/></ListGroup.Item>
      <ListGroup.Item><Folder/></ListGroup.Item>
    </ListGroup>
  );
}

export default HorizontalExample;