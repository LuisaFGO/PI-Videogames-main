import { Route, BrowserRouter, Switch} from "react-router-dom";

import Detail from './View/detailPage/detail.component';
import Form from './View/formPage/form.component';
import Home from './View/homePage/home.component';
import Landing from './View/landingPage/landing.component';


function App() {
  return (
    <BrowserRouter>
      <div>
       < Switch>
          < Route exact path= "/home" component={Home} />
          < Route path="/home/:id" component={Detail} />
          < Route path="/form" component={Form} />
          < Route path="" component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
