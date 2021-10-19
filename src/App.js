import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import OnlineConsult from './components/OnlineConsult/OnlineConsult';
import Doctors from './components/Doctors/Doctors';
import Blog from './components/Blog/Blog';
import AboutUs from './components/AboutUs/AboutUs';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (

    <div className="App ">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route path='/home/'>
              <Home></Home>
            </Route>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path="/login/">
              <Login></Login>
            </Route>

            <Route path="/doctors/">
              <Doctors></Doctors>
            </Route>

            <PrivateRoute path="/blog/">
              <Blog></Blog>
            </PrivateRoute>

            <Route path="/about-us/">
              <AboutUs></AboutUs>
            </Route>

            <Route path="/register/">
              <Register></Register>
            </Route>

            <Route path="/booking/:bookId">
              <ServiceDetails></ServiceDetails>
            </Route>

            <PrivateRoute path='/online-consult/'>
              <OnlineConsult></OnlineConsult>
            </PrivateRoute>


            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
