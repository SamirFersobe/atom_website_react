import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import FooterBanner from './components/FooterBanner';
import HeaderBanner from './components/HeaderBanner';
import About from './components/About';
import HomeProductsDisplay from './components/HomeProductsDisplay';
import Contact from './components/Contact';
import Form from './components/Form';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";



export default function App(){
  return(
    <Router>
    <Switch>
      <Route path="/about">
        <About_page />
      </Route>
   
      <Route path="/store">
        <Store_page />
      </Route>

      <Route path="/contact">
        <Contact_page />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>


      {/* this path is supposed to go last because if not then the router 
      accepts it before any other link, i.e /store or /about so it works as a
      else or default*/}
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </Router>
  )
}


function Home() {
  
  return (
  <div className= 'container'>
  <Header  />
  <HeaderBanner type='main' />
  <HomeProductsDisplay />
  
  <FooterBanner type='main' />
  <Footer />
</div>
  );
}


function About_page(){
return(
<div className= 'container'>
  <Header />
  <HeaderBanner type='about' />
  <About />
  <FooterBanner type='about' />
  <Footer />
</div>
)
}


function Contact_page(){
  return(
    <div className ="container">
    <Header  />
    <HeaderBanner type ='contact' />
    <Contact />
    <Form />
    <FooterBanner type ='contact' />
    <Footer />
  </div>
  )
}

function Store_page(){
  return(
    <div className= 'container'>
    <Header   />
    <HeaderBanner type='main' />
    <h1>Store</h1>
    <FooterBanner  type='main' />
    <Footer />
  </div>
  )
}

function Cart() {
  return (
    
      <div className= 'container'>
        <Header  />
        <HeaderBanner type='main' />
        <h1>Under Construction</h1>
        <FooterBanner type='main' />
        <Footer />
      </div>
    
  )
}


