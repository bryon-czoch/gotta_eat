import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Router, Route, browserHistory, IndexRoute} from "react-router";

class fApp extends React.Component {
render(){
    return (
      <Router history={browsewrHistory}>
          <Route path={"/"} component={Root} >
              <IndexRoute component={Home} />
              <Route path={"user"} component={User} />
              <Route path={"home"} component={Home} />
          </Route>
          <Route path={"home-single"} component={Home}/>
      </Router>
    );
  }
}

render(<fApp />, window.document.getElementById('app'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
