import './App.css';
import Currencies from "./pages/currencies"
import Main from "./pages/main"
import  Price from "./pages/price"
import Nav from "./Components/Nav"

//import the route, switch makes sure that only the first route to match the switch shows up
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* path indicates the child component should show when the path matches - just slash is the root route */}
      <Nav />
      {/* wrap switch around components */}
        <Switch>
          {/* exact prop changes the match from soft match to an exact match */}
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/currencies">
          <Currencies />
        </Route>
        {/* param stores part of the url as a variable, use the render prop to pass a function that allows router props to pass to price component */}
        <Route path="/price/:symbol" render={(routerProps) => <Price {...routerProps} />}
        //router props destructure and pass all the router props data
        />
      </Switch>
    </div>
  );
}

export default App;
