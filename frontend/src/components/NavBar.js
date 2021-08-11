import {NavLink} from "react-router-dom"

const Nav = () => {
    return (
        <nav className="navBar">
            <NavLink exact to="/"><p>Home</p></NavLink>
            <NavLink to="/cities"><p>Cities</p></NavLink>
            <img src ="/assets/person-circle.svg" alt="userIcon"/>
            <NavLink to="/notFound"><p>Sign up</p></NavLink>
            <NavLink to="/notFound"><p>Log in</p></NavLink>
        </nav>
    )
}

export default Nav