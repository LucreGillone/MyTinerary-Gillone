import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import City from "./pages/City"
import Error404 from "./pages/Error404"
// import Crisis from "./pages/Crisis"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
// import {useState} from "react"

const App = () => {
  // const [cities, setCities] = useState({})


  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cities" component={Cities}/>
            <Route path="/city/:id" component={City}/>
            <Route path="/notFound" component={Error404}/>
            <Redirect to="/notFound"/>
        </Switch>
    </BrowserRouter>
  )
}

export default App
