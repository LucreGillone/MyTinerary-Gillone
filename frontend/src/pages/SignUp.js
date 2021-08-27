import NavBar from "../components/NavBar"
import {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import Swal from 'sweetalert2'
import {connect} from "react-redux" 
import usersActions from "../redux/actions/usersActions"

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
            // axios.post("http://localhost:4000/api/user/signUp", newUser)
        .then((response) => {
            console.log(response)
            if (!response.data.success){//no entra en este if, dice que response es undefined cuando quiero reingresar con un mail que ya está
                Toast.fire({
                    icon: 'error',
                    title: 'That email has already been used! Try with another one.'
                  })
            } else {
                Toast.fire({
                    icon: 'success',
                    title: 'Your account has been created!'
                  })
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
                <h2>Create an Account!</h2>
                <form>
                        <input type="text" onChange={inputHandler}  name="firstName" placeholder="First Name" autoComplete="nope"/>
                        <input type="text" onChange={inputHandler} name="lastName" placeholder="Last Name" autoComplete="nope"/>
                        <input type="url" onChange={inputHandler} name="src" placeholder="Url of your picture"autoComplete="nope"/>
                        <select name="country" onChange={inputHandler}>
                            <option>Choose your country</option>
                            {countries.map((country,index) => 
                            <option key={index} value={country.name}> 
                                {country.name}
                            </option>)}
                        </select>
                        <input type="email" onChange={inputHandler} name="email" placeholder="Email" autoComplete="nope"/>
                        <input type="password" onChange={inputHandler} name="password" placeholder="Password" autoComplete="nope"/>
                </form>
                <button onClick={submitForm}>Sign Up</button>
                <span className="logIn/signUp">
                    <h5>Already have an account?</h5>
                    <Link to="/logIn"><h5>Log In</h5></Link>
                </span>
            </div>
            
        </main>
            
        </>
    )
}

const mapDispatchToProps = {
    signUp: usersActions.signUp

}

export default connect (null, mapDispatchToProps)(SignUp) 