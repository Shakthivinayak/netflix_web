import './App.css';
import Action from './components/Action';
import Comedy from './components/Comedy';
import Home from './components/Home';
import Login from './components/Login';
import {BrowserRouter,Routes as Router,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Router>
     
     <Route path="/" element ={<Login/>}/>
     <Route path="/home" element ={<Home/>}/>
     <Route path="/act-gener" element ={<Action/>}/>
     <Route path="/cmd-gener" element ={<Comedy/>}/>

     </Router>
     </BrowserRouter>
    </div>
  );
}

export default App;
