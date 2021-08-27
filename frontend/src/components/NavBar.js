import {NavLink} from "react-router-dom"
import usersActions from "../redux/actions/usersActions"
import {connect} from "react-redux"

const Nav = (props) => {
    console.log(props)
    return (
        <nav className="navBar">
            <NavLink exact to="/"><p>Home</p></NavLink>
            <NavLink to="/cities"><p>Cities</p></NavLink>
            <div className="user"> 
            <p>Welcome {props.token ? props.name : ""}</p>
            <img src ="/assets/person-circle.svg" alt="userIcon"/>
            </div>
            {!props.token && <NavLink to="/signUp"><p>Sign up</p></NavLink>}
            {!props.token && <NavLink to="/logIn"><p>Log in</p></NavLink>}
            {props.token && <p onClick={() => props.logOut()}>Log out</p>}
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        name: state.users.name
    }
    
}

const mapDispatchToProps = {
    logOut: usersActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)