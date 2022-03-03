import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import ImageCropper from "./Components/ImageCropper/ImageCropper";

function App() {
  return <div className="">
          <Router>
            <Switch>
              <Route exact path='/'>
                  <Home/>
              </Route>
              <Route path='/bgremover'>
                  <Home/>
              </Route>
              <Route path='/imagecropper'>
                  <ImageCropper/>
              </Route>
          
          </Switch>
          </Router>
  </div>;
}

export default App;
