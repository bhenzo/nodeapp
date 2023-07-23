import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import NavbarLayout from './layout/NavbarLayout';
import LoginModal from '../components/LoginModal';

const Main = () => {
  const [items, setItems] = useState([]);

  // fetch items from server
  useEffect(() =>  {
    const fetch = async () => {
      const resp = await axios.get('/api/items');
      setItems(resp.data);
    }
    fetch();
  }, []);


  return (
    <NavbarLayout centerVertically centerHorizontally>
        <LoginModal>

        </LoginModal>
    </NavbarLayout>
  );
}

export default Main;
