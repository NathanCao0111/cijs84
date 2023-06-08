import logo from './logo.svg';
import './App.css';
// import Auth from './pages/Auth'
// import Login from './components/Login'
// import Register from './components/Register'
// import Products from './pages/Products'
// import ProductDetails from './components/ProductDetails'
// import Invoices from './pages/Invoices'
// import InvoiceDetails from './components/InvoiceDetails'
// import Cart from './pages/Cart'
// import Profile from './pages/Profile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />}>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
        </Route>
        <Route path='/products' element={<Products />}>
          <Route path='/products/:id' element={<ProductDetails />} />
        </Route>
        <Route path='/invoices' element={<Invoices />}>
          <Route path='/invoices/:id' element={<InvoiceDetails />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;
