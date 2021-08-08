import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import Error404 from "./pages/Error404"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cities" component={Cities}/>
            <Route path="/notFound" component={Error404}/>
            <Redirect to="/notFound"/>
        </Switch>
    </BrowserRouter>
  )
}

export default App
