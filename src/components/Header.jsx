import React from "react"
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] md:text-4xl sm:text-3xl text-xl font-bold p-2"> Welcome to Greenhub</p>
                <h1 className="md:text-2xl sm:text-2xl text-xl font-bold md:py-6 font ">Greenhub is a waste Management Platform which allows customers pay directly to the PSP in their locations for solid waste disposal, using multiple payment channels, generate digital proof of payment and, earn from recycling specific waste materials</h1>     
                <div className="flex justify-center items-center ">
                <p className="md:text-4xl sm:text-3xl text-xl font-bold">make payment through  </p>
                
                <Typed 
                className={"text-[#514f4f] md:text-4xl sm:text-3xl text-xl font-bold pl-2"}
                strings={["Transfers", "USSD", "POS"]} 
                typedSpeed = {140}
                backSpeed = {150}
                loop 
                
                />
                
                </div>
                <button className="bg-[#00df9a] text-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto py-2"> Make Payment </button>
                
            </div>
            
        </div>
    )
}
export default Header