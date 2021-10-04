import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About-us/About';
import Services from './components/Services/Services';
import Courses from './components/Courses/Courses';
import Notfound from './components/Notfound/Notfound';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/home"><Home></Home></Route>
          <Route path="/about"><About></About> </Route>
          <Route path="/courses"><Courses></Courses> </Route>
          <Route path="/services"><Services></Services> </Route>
          <Route path="*"><Notfound></Notfound></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
