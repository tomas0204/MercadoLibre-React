import { BrowserRouter } from 'react-router';
import './App.css'
import FooterML from './components/shared/Footer'
import Menu from './components/shared/Menu'
import Home from './components/pages/Home' 
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Home />
        <FooterML />
      </BrowserRouter>
    </>
  )
}

export default App
