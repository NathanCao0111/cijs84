import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Home/Products'
import ProductItems from './pages/Home/Products/ProductItems'
import Invoices from './pages/Home/Invoices'
import InvoiceItems from './pages/Home/Invoices/InvoiceItems'
import Cart from './pages/Home/Cart'
import Profile from './pages/Home/Profile'
import About from './pages/Home/About'
import Auth from './pages/Auth'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

function App() {
  return (
    <div className="App">
      <Routes>
        { 
          <Route path='/auth' element={<Auth />}>
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
          </Route>
        }
        { 
          <Route path='/' element={<Home />}>
            <Route path='/products' element={<Products />}>
              <Route path='/products/:id' element={<ProductItems />} />
            </Route>
            <Route path='/invoices' element={<Invoices />}>
              <Route path='/invoices/:id' element={<InvoiceItems />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/about' element={<About />} />
          </Route>
        }
      </Routes>
    </div>
  );
}

export default App;
