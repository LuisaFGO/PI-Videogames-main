import { Route, BrowserRouter, Switch} from "react-router-dom";

import Detail from './View/detailPage/detail.component';
import Form from './View/formPage/form.component';
import Home from './View/homePage/home.component';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
       < Switch>
          < Route exact path= "/home" component={Home} />
          < Route path="/home/:id" component={Detail} />
          < Route path="/form" component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
