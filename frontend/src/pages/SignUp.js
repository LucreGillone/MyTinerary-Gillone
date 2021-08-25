import NavBar from "../components/NavBar"
import {useEffect, useState} from "react"
import axios from "axios"

const SignUp = () => {
    const [countries, setCountries] = useState ([])
    const [newUser, setNewUser] = useState ({
        firstName: "",
        lastName: "",
        src: "",
        country: "",
        email: "",
        password: "",

    })


 
    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/all?fields=name`)
        .then((response) => 
        setCountries(response.data))
        .catch((error) => console.log(error))
    

    }, [])

    console.log(countries)
   
    const inputHandler = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
            
        })
    }
    

    const submitForm = () => {
        let info = Object.values(newUser).some((infoUser) => infoUser === "")
        if (info) {
            alert("There are fields incomplete, please complete them.")
        } else {
            axios.post("http://localhost:4000/api/user/signUp", newUser)
        .then((response) => {
            if (!response.data.success){
                alert("That email has already been used! Try with another one.")
            } else {
                alert("Your account has been created!")
            }
        })        
        .catch((error) => console.log(error))//catchear comunicacion con BD
        }
    }

    return (
        <>
            <NavBar/>
            <main>
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
            </main>
            
        </>
    )
}

export default SignUp