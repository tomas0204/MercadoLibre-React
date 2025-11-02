import { BrowserRouter } from 'react-router';
import './App.css'
import FooterML from './components/shared/Footer'
import Menu from './components/shared/Menu'
import Home from './components/pages/Home'
import { Routes, Route } from 'react-router';
import Login from './components/pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <FooterML />
      </BrowserRouter>
    </>
  )
}

export default App
