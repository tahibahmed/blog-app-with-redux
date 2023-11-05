
import { useState } from 'react';
import Blog from './Blog';
import Login from './Login';
import Signupp from './Signupp';

function App() {

  const [count, setcount] = useState(1)


  function counting() {
    setcount(count + 1)
  }
  

  return (
    <div >

      <button style={{fontSize:"34px"}} onClick={counting}>{count}</button>
     

      <Signupp />
      <Login />
      <Blog />
    </div>
  );
}

export default App;
