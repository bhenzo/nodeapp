import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
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
    <div className="App">
      {items.map(it => <p key={it}>{it}</p>)}
    </div>
  );
}

export default App;
