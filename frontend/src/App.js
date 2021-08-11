import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import InfoCards from "./pages/InfoCards"
import Error404 from "./pages/Error404"
import Crisis from "./pages/Crisis"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cities" component={Cities}/>
            <Route path="/card" component={InfoCards}/>
            <Route path="/crisis" component={Crisis}/>
            <Route path="/notFound" component={Error404}/>
            <Redirect to="/notFound"/>
        </Switch>
    </BrowserRouter>
  )
}

export default App
