import React, { useEffect,useState} from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const urlJson= 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetch(urlJson)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
   console.log(users);


  return (
    <div className="App">
     {/* <h1>Hello World</h1> */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        // map to card
        users.map(user => (
      //  Card
      <Card name={user.name} 
      id={user.id} 
      address={user.address} 
      phone={user.phone} 
      email={user.email}  />
        ))

      )}

    </div>
  );
}

export default App;
