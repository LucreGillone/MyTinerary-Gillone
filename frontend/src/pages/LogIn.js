import NavBar from "../components/NavBar"
import {useState} from "react"
import {Link} from "react-router-dom"
import Swal from 'sweetalert2'
import {connect} from "react-redux"
import usersActions from "../redux/actions/usersActions"
import GoogleLogin from 'react-google-login'

const LogIn = (props) => {
    const [logUser, setLogUser] = useState ({
        email: "", 
        password: "",
    })

    const [errorInput, setErrorInput] = useState(null)
    
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

        } else {
            props.logUser(logUser)
            // axios.post("http://localhost:4000/api/user/logIn", logUser)
        .then((response) => {
            if (!response.data.success){
                // Toast.fire({
                //     icon: 'error',
                //     title: 'Email and/or password incorrect'
                //   })
                alert(response.data.response)//camnbiar alert feo
            } else {
                Toast.fire({
                    icon: 'success',
                    title: 'Welcome back!'
                  })
            }
        })        
        .catch((error) => Toast.fire({
                icon: 'error',
                title: 'Email and/or password incorrect'
              })
        // alert(error)//
        )//catchear comunicacion con BD
        }
    }

    const responseGoogle =  async res => {
        let logGoogleUser = {
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            googleFlag: true
        }
        let response = await props.logUser(logGoogleUser)
        .then(() => {
            if (response.data.success){
                Toast.fire({
                    icon: 'success',
                     title: 'Welcome back!'
                  })
            }
            else{
            setErrorInput(response.data.error)
            }
        })
        .catch((error) => {
            console.log(error)
            Toast.fire({
                icon: 'error',
                title: 'You have to sign up before you log in!'
              })
        })
    }


    return (
        <>
            <main>
                <NavBar/>
                
                <div className="jetway" style={{backgroundImage: `url("/assets/jetway.jpg")`}}>
                   <div className="userForm">
                    <h3>Welcome back!</h3>
                    <form>
                        <input type="email" onChange={inputHandler} name="email" placeholder="Email" autoComplete="nope"/>
                        <input type="password" onChange={inputHandler} name="password" placeholder="Password" autoComplete="nope"/>
                    </form>
                    <button onClick={submitForm}>Log In</button>
                    <GoogleLogin
                    clientId="556133798915-04cvch3go6p7e8emmtorfuogaa933l4h.apps.googleusercontent.com"
                    buttonText="Log in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    />
                    <span className="logIn/signUp">
                        <h5>You don't have an account yet?</h5>
                        <Link to="/signUp"><h5>Sign Up</h5></Link>
                    </span>
                    
                </div> 
                </div>
            </main>
            
        </>
    )
}

const mapDispatchToProps = {
    logUser: usersActions.logUser
}

export default connect(null, mapDispatchToProps)(LogIn)