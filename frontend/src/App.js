import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import City from "./pages/City"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import Error404 from "./pages/Error404"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import { useEffect } from "react"
import usersActions from "./redux/actions/usersActions"
import {connect} from "react-redux"

const App = (props) => {
  useEffect(() => {
    if (localStorage.getItem("token")){
      props.logInLS(localStorage.getItem("token"))

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cities" component={Cities}/>
            <Route path="/city/:_id" component={City}/>
            <Route path="/notFound" component={Error404}/>
            {!props.token && (<Route path="/signUp" component={SignUp}/>)}
            {!props.token && (<Route path="/logIn" component={LogIn}/>)}
            <Redirect to="/"/>
        </Switch>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.users.token
  }
  
}

const mapDispatchToProps = {
  logInLS: usersActions.logInLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)