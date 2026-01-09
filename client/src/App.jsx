

import './App.css'
import AllcontactData from './pages/AllcontactData';
import Contact from './pages/Contact';
import { Route,Routes } from 'react-router-dom';

function App() {

  return (
   <>

   <Routes>
      <Route path='/' element={<Contact />} />
      <Route path='/allcontacts' element={<AllcontactData/>} />
   </Routes>

   </>
  )
}

export default App;
