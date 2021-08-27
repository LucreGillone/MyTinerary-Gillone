import NavBar from "../components/NavBar"
import {useState} from "react"
// import axios from "axios"
import {Link} from "react-router-dom"
import Swal from 'sweetalert2'
import {connect} from "react-redux"
import usersActions from "../redux/actions/usersActions"

const LogIn = (props) => {
    const [logUser, setLogUser] = useState ({
        email: "", 
        password: "",
    })

    
    const inputHandler = (e) => {
        setLogUser({
            ...logUser,
            [e.target.name]: e.target.value
            
        })
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    

    const submitForm = () => {
        let info = Object.values(logUser).some((infoUser) => infoUser === "")
        if (info) {
            Toast.fire({
                icon: 'error',
                title: 'There are fields incomplete, please complete them.'
              })
            // alert("There are fields incomplete, please complete them.")
        } else {
            console.log(props)
            props.logUser(logUser)
            // axios.post("http://localhost:4000/api/user/logIn", logUser)
        .then((response) => {
            
            if (!response.data.success){
                Toast.fire({
                    icon: 'error',
                    title: 'Email and/or password incorrect'
                  })
                // alert(response.data.response)
            } else {
                Toast.fire({
                    icon: 'success',
                    title: 'Welcome back!'
                  })
                // alert("Welcome back!")
            }
        })        
        .catch((error) => console.log(error))//catchear comunicacion con BD
        }
    }


    return (
        <>
            <main>
                <NavBar/>
                <div className="userForm">
                    <h2>Welcome back!</h2>
                    <form>
                        <input type="email" onChange={inputHandler} name="email" placeholder="Email" autoComplete="nope"/>
                        <input type="password" onChange={inputHandler} name="password" placeholder="Password" autoComplete="nope"/>
                    </form>
                    <button onClick={submitForm}>Log In</button>
                    <span className="logIn/signUp">
                        <h5>You don't have an account yet?</h5>
                        <Link to="/signUp"><h5>Sign Up</h5></Link>
                    </span>
                    
                </div> 
            </main>
            
        </>
    )
}

const mapDispatchToProps = {
    logUser: usersActions.logUser
}

export default connect(null, mapDispatchToProps)(LogIn)