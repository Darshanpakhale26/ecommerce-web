import React from 'react'
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const navigate = useNavigate();

    const HandleLogin = (e) => {

        e.preventDefault();
       

       
        navigate('/'); // Redirect to home page after login 
       
    }



  return (
    <div>
        <div className=" grid justify-center container mx-auto p-4">
            <h1 className="flex justify-center text-2xl font-bold mb-4">Login</h1>
    
            <form className="grid  justify-center border rounded-lg p-4 w-80 mt-10 ">
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 border rounded-md w-full" />
            </div>
    
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" className="mt-1 p-2 border rounded-md w-full" />
            </div>
    
            <button onClick={HandleLogin} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1">
                Login
            </button>
            </form>
        </div>
    </div>
  )
}

export default Login