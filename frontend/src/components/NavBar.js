import {NavLink} from "react-router-dom"
import usersActions from "../redux/actions/usersActions"
import {connect} from "react-redux"

const Nav = (props) => {
    console.log(props)
    return (
        <nav className="navBar">
            <NavLink exact to="/"><p>Home</p></NavLink>
            <NavLink to="/cities"><p>Cities</p></NavLink>
            {/* <div className="user">  */}
                <div className="profilePic">
                    {props.src
                    ? <div className="profilePic" style={{backgroundImage: `url("${props.src}")`}}></div> 
                    : <img src ="/assets/person-circle.svg" alt="userIcon"/> }
                </div>
                <p>{props.token ? props.firstName : ""}</p>
            {/* </div> */}
            {!props.token && <NavLink to="/signUp"><p>Sign up</p></NavLink>}
            {!props.token && <NavLink to="/logIn"><p>Log in</p></NavLink>}
            {props.token && <p onClick={() => props.logOut()}>Log out</p>}
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        firstName: state.users.firstName,
        src: state.users.src
    }
    
}

const mapDispatchToProps = {
    logOut: usersActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)