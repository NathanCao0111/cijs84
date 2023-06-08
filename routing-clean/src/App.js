import './App.css';
import './themes/startbootstrap-clean-blog-gh-pages/css/styles.css'
import { Routes, Route } from 'react-router-dom'
// import Auth from './pages/Auth'
// import Login from './components/Login'
// import Register from './components/Register'
// import Products from './pages/Products'
// import ProductDetails from './components/ProductDetails'
// import Invoices from './pages/Invoices'
// import InvoiceDetails from './components/InvoiceDetails'
// import Cart from './pages/Cart'
// import Profile from './pages/Profile'
import About from './pages/About'
import Home from './pages/Home';
import Contact from './pages/Contact'
import Post from './pages/Post'
import Header from './components/Header'
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<Post />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
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
