import './App.css';
import AddUser from './component/AddUser';
import AllUsers from './component/AllUsers';
import CondeForInterview from './component/CondeForInterview';
import NavBar from './component/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditUser from './component/EditUser';
function App() {
  return (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<CondeForInterview/>} />
      <Route path='/all' element={<AllUsers/>} />
      <Route path='/add' element={<AddUser/>} />
      <Route path='/edit/:id' element={<EditUser/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
