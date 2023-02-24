import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handeNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex text-white justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
           <h1 className="w-full text-3xl font-bold text-[#00df9a]">Greenhub</h1>
            <ul className="hidden md:flex w-auto">
                <li className="p-4 border-gray-500">Home</li>
                <li className="p-4 border-gray-500">Login</li>
                <li className="p-4 border-gray-500">Register</li>
                <li className="p-4 border-gray-500">Payment</li>
                <li className="p-4 border-gray-500">Contact</li>   
            </ul>
            <div onClick={handeNav} className="block md:hidden">
                {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
                
            <div className={!nav ?  "fixed left-[-100%]": "fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-[#000300] ease-in-out duration-500"}>
                    <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Greenhub</h1>
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-grey-600">Home</li>
                        <li className="p-4 border-b border-grey-600">Login</li>
                        <li className="p-4 border-b border-grey-600">Register</li>
                        <li className="p-4 border-b border-grey-600">Payment</li>
                        <li className="p-4 border-b border-grey-600">Contact</li>   
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar