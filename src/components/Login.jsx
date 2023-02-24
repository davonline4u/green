import React from "react"
import plastic from "../assets/plastic.jpg"


const Login = () => {
    return (
       <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img src={plastic} className="W-full h-full object-cover " alt=""/>
            </div> 
            <div className="bg-gray-800 flex flex-col justify-center ">
                <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 rounded-lg">
                    <h2 className="text-4xl text-[#00df9a] font-bold text-center"> SIGN IN</h2>
                    
                    <div className="flex flex-col text-white py-2">
                        <label>User Name</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" />
                    </div>

                    <div className="flex flex-col text-white">

                        <label>Password</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" />
                    
                    </div>               
        
                    <div className="flex flex-row justify-between text-white">

                        <p className="text-white "><input type="checkbox" /> Remember Me  </p>
                        <p className="text-white">Forgot Password</p>
                    </div>
        
                    <button className="text-[#00df9a] bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto md:m-0 py-3"> Sign In </button>
                    
                </form>
            </div>
       </div>
    )
}
export default Login