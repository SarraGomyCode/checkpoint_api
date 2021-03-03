import './App.css';
import { useState,useEffect } from 'react';
import axios from"axios"
import UsersCards from "./Component/UsersCards";

function App() {
  const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users"
  const [user,setUser] = useState ([])
  useEffect(() => {
    axios.get(USERS_ENDPOINT).then((response) => {
      setUser(response.data)
  })
  }, [])
  return (
    <div className="App">
      
     {user.map((user) => (
       <UsersCards user =  {user} key = {user.id}  />
     ))
     }
    </div>
  );
}

export default App;
