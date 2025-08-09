import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <main>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
         </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;