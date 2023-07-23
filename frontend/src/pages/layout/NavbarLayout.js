import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import Navbar from '../../components/Navbar';

const NavbarLayout = ({children}) => {
 
  return (
    <>
      <Navbar />
      <Container>
        {children}
      </Container>
    </>
  );
}

export default NavbarLayout;
