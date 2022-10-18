
import { useEffect } from 'react';
import { BrowserRouter, Route,Router,Routes,useParams } from 'react-router-dom';
import Machine from './Machine';

const App=()=>{

  useEffect(()=>{
  
  })
return(
  <>
    <BrowserRouter>
      <Routes>
      <Route path="/authx/:sc_address" element={<Machine/>}/>
</Routes>
</BrowserRouter>
</>
);
}
export default App;