import NavBar from "../components/NavBar"
import {useState} from "react"
import axios from "axios"

const LogIn = () => {
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
    

    const submitForm = () => {
        let info = Object.values(logUser).some((infoUser) => infoUser === "")
        if (info) {
            alert("There are fields incomplete, please complete them.")
        } else {
            axios.post("http://localhost:4000/api/user/logIn", logUser)
        .then((response) => {
            if (!response.data.success){
                alert(response.data.response)
            } else {
                alert("Welcome back!")
            }
        })        
        .catch((error) => console.log(error))//catchear comunicacion con BD
        }
    }


    return (
        <>
            <NavBar/>
            <main>
                <form>
                    <input type="email" onChange={inputHandler} name="email" placeholder="Email" autoComplete="nope"/>
                    <input type="password" onChange={inputHandler} name="password" placeholder="Password" autoComplete="nope"/>
                </form>
                <button onClick={submitForm}>Log In</button>
            </main>

            
        </>
    )
}

export default LogIn 