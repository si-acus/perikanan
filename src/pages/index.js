import React, { useEffect } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getAllItem } from '../actions/ItemActions';
import { getAllArea } from '../actions/AreaActions';
import { getAllSize } from '../actions/SizeActions';
import Table from '../components/TableItems';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllItem());
  }, []);
  useEffect(() => {
    dispatch(getAllArea());
  }, []);
  useEffect(() => {
    dispatch(getAllSize());
  }, []);

  return (
    <Container className="p-3">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Perikanan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Table />

    </Container>
  );
};

export default Home;

