import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate()
    const location = useLocation().state
    const [userData , setUserData] = useState({
        username: "",
        password: ""
    })

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        setUserData(prev => ({...prev,[name]:value}))
    }

    function handleSubmite(e){
        e.preventDefault()
        localStorage.setItem("user" , JSON.stringify(userData))
        navigate(`${location?.from || '/'}`)
    }

    return(
        <form className="p-10 m-auto mt-15 w-120 h-120 text-center shadow-xl rounded-2xl" onSubmit={e=>handleSubmite(e)}>
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-gray-500 my-5 text-sm">please enter your information to proceed with login</p>
            <input type="text" className="p-2.5 m-auto my-3 border focus:border-red-600 w-90 rounded-lg" name="username" placeholder="username" value={userData.username} onChange={e => handleChange(e)} /><br></br>
            <input type="password" className="p-2.5 m-auto my-3 border focus:border-red-600 w-90 rounded-lg" name="password" placeholder="password" value={userData.password} onChange={e => handleChange(e)} /><br></br>
            <div className="flex p-0.5">
                <div className="flex">
                    <input type="checkbox"/> <span className="text-gray-500 my-5 text-sm ml-1">Remember me</span>
                </div>
                
                <span className="text-gray-500 my-5 text-sm  w-70 text-end hover:cursor-pointer hover:underline ">Forgot Password?</span>
            </div>
            <button className="w-80 bg-blue-900 text-white p-1.5 rounded-lg hover:cursor-pointer mt-5">submit</button>
            <p className="text-gray-500 my-5 text-sm">Not a member yet? <span className="text-blue-800 underline hover:cursor-pointer">register now</span></p>
        </form>
    )
}