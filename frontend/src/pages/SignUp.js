import NavBar from "../components/NavBar"
import {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import Swal from 'sweetalert2'
import {connect} from "react-redux" 
import usersActions from "../redux/actions/usersActions"
import GoogleLogin from 'react-google-login'

const SignUp = (props) => {
    const [countries, setCountries] = useState ([])
    const [newUser, setNewUser] = useState ({
        firstName: "",
        lastName: "",
        src: "",
        country: "",
        email: "",
        password: "",
    })

    const [errorInput, setErrorInput] = useState({})

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
 
    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/all?fields=name`)
        .then((response) => 
        setCountries(response.data))
        .catch((error) => console.log(error))
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
   
    const inputHandler = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
            
        })
    }
    const submitForm = () => {
        let info = Object.values(newUser).some((infoUser) => infoUser === "")
        if (info) {
            Toast.fire({
                icon: 'error',
                title: 'There are fields incomplete, please complete them.'
              })
        } else {
            props.signUp(newUser)
        .then((response) => {
            if (response.data.success){
                Toast.fire({
                    icon: 'success',
                     title: 'Your account has been created!'
                  })
            } else if (response.data.errors){
                setErrorInput({})
                response.data.errors.map(error => setErrorInput(messageError => {
                        return {
                            ...messageError, 
                        [error.path]: error.message,
                        }
                    }
                    )  
                   
                )
               
            } else {
                Toast.fire({
                    icon: 'error',
                    title: 'That email has already been used! Try with another one.'
                  })
            }
        })        
        .catch((error) => console.log(error))
        }
    }
    const responseGoogle = async (res) => {
        let googleUser = {
            firstName: res.profileObj.givenName,
            lastName: res.profileObj.familyName,
            src: res.profileObj.imageUrl,
            country: "Argentina",
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            google: true, 
        }
        let response = await props.signUp(googleUser)
        if (!response.data.success){
           setErrorInput(response.data.error)
        }
    }

    return (
        <>
        <main>
            <NavBar/>
            <div className="airport" style={{backgroundImage: `url("/assets/airport.jpg")`}}>

              <div className="userForm">
                <h3>Create an Account!</h3>
                {/* poner en 2 divs los inputs */}
                <form>
                    <div className="inputs">
                        <input type="text" onChange={inputHandler}  name="firstName" placeholder="First Name" autoComplete="nope"/>
                        <p>{errorInput.firstName}</p>
                        <input type="text" onChange={inputHandler} name="lastName" placeholder="Last Name" autoComplete="nope"/>
                        <p>{errorInput.lastName}</p>
                        <input type="url" onChange={inputHandler} name="src" placeholder="Url of your picture" autoComplete="nope"/>
                    </div>
                    <div className="inputs">
                        <select name="country" onChange={inputHandler}>
                            <option>Choose your country</option>
                            {countries.map((country,index) => 
                            <option key={index} value={country.name}> 
                                {country.name}
                            </option>)}
                        </select>
                        <input type="email" onChange={inputHandler} name="email" placeholder="Email" autoComplete="nope"/>
                        <p>{errorInput.email}</p>
                        <input type="password" onChange={inputHandler} name="password" placeholder="Password" autoComplete="nope"/>
                        <p>{errorInput.password}</p>
                    </div>
                </form>
                <button onClick={submitForm}>Sign Up</button>
                <GoogleLogin
                    clientId="556133798915-04cvch3go6p7e8emmtorfuogaa933l4h.apps.googleusercontent.com"
                    buttonText="Sign Up with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                  <span className="logIn/signUp">
                    <h5>Already have an account?</h5>
                    <Link to="/logIn"><h5>Log In</h5></Link>
                </span>
            </div>
               
            </div>
           
        </main>
            
        </>
    )
}

const mapDispatchToProps = {
    signUp: usersActions.signUp

}

export default connect (null, mapDispatchToProps)(SignUp) 