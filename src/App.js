import React from 'react';
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import routes from './routes'
function App() {
  return (
    <>
    <Router>
      <Nav />
      <div className ='container'>
        <div className='row mt-10'>
          {showContents(routes)}
        </div>
      </div>
    </Router>
    </>
  );
}

const showContents = (routes) => {
  var result = null;
  if(routes.length > 0){
    result = routes.map((route,index)=> {
      return <Route
        key = {index}
        path = {route.path}
        exact = {route.exact}
        component = {route.component}
        />
    })
  }
  return <Switch>{result}</Switch>
}
export default App;
