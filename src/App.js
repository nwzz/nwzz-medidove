import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (

    <div className="App ">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/login/">
            <Login></Login>
          </Route>
          
          <Route path='/home/'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          
        </Switch><br /><br />
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
