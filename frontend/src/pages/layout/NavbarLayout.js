import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import styles from './NavbarLayout.module.css';

const NavbarLayout = ({children, centerVertically, centerHorizontally}) => {
 
  let style = {};

  centerVertically && (style['align-items'] = 'center');
  centerHorizontally && (style['justify-content'] = 'center');
  
  return (
    <div className={styles['container-layout']}>
      <Navbar />
      <Container className={styles['container']} style={style}>
        {children}
      </Container>
    </div>
  );
}

export default NavbarLayout;
