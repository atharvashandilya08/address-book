
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import About from "./About";
import Anonymous from "./Anonymous";
import Book from "./Book";
import Contact from "./Contact";
import Entry from "./Entry";
import Home from "./Home";
import LogIn from "./LogIn";
import Register from "./Register";
import Search from "./Search";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleToggle = () => {
    isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true)
  }
  return (
    <Router>
      <div className="App">
        
        <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/book">
          <Book books={[{name:"Albert"},{name:"Isaac"},{name:"Augustus"}, {name:"Vikramaditya"}]}/>
        </Route>
        <Route path="/search">
          <Search books={[{name:"Albert", email:"albert@gmail.de"},{name:"Isaac", email:"isaac@gmail.uk"},{name:"Augustus", email:"augustus@gmail.it"}, {name:"Vikramaditya", email:"vikramaditya@gmail.mp"}]}/>
        </Route>
        <Route path="/log-in">
          <LogIn/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/create">
          <Entry/>
        </Route>
        <Route path="/:groupName">
          <Book books={[{name:"Albert"},{name:"Isaac"},{name:"Augustus"}, {name:"Vikramaditya"}]}/>
        </Route>
        
        <Route path="/">
          <button className="btn btn-success" onClick={handleToggle}>Toggle Homepage</button>
          <Home isLoggedIn={isLoggedIn}/>
        </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
