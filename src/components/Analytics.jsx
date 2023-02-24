import React from "react"
import imagephone from "../assets/imagephone.png"


const Analystics = () => {
    return (
       <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={imagephone} className="W-[500px] my-4 mx-auto" alt=""/>
                <div className="flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold">PERSONAL DASHBOARD</p>
                <h1 className="md:4xl sm:3xl text-2xl font-bold py-2">Manage, print and view your data</h1>
                <p>The Green Waste Management platform is a robust digital technology
                    infrastructure for all stakeholders within the waste management value
                    chain, designed to drive frictionless in-app payments as well as promote
                    the sustainable development agenda for waste management. The Green
                    Mantra: "Payment + Sustainability”
                </p>
                <button className="text-[#00df9a] bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto md:m-0 py-3"> View Dashboard </button>
                </div>
            </div>
       </div>
    )
}
export default Analystics