import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
    
    <div className=' flex flex-col min-h-screen justify-center items-center bg-black '>
        <div className=' w-1/2 h-1/2 border-4 m-4 p-9 rounded-xl'>
        <Link to="/" className=" grid justify-items-center">
                        <img
                            src="https://www.blender.org/wp-content/uploads/2020/07/blender_logo_no_socket_white.png"
                            className="m-4  w-30 h-20"
                            alt="Logo"
                        />
                        </Link>
        <div className=''>
            <h1 className='text-white text-center text-xl'>Email Address / Phone Number</h1>
            <label for="email" className="hidden">
                                    Email
                                </label>
                                    <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full mt-2 py-3 px-10 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none text-center"
                                />
        </div>
        <div className="flex flex-col mt-2">
                                <label for="Password" className="hidden">
                                    Password
                                </label>
                                <h1 className='text-white text-center text-xl'>Password</h1>
                                <input
                                    type="Password"
                                    name="Password"
                                    id="password"
                                    placeholder="Password"
                                   className="w-full mt-2 py-3 p-10 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none text-center"
                                />
                                
                            </div>
                            <div className=' place-items-center flex-shrink-0  flex flex-col items-center '>
                            <button
                                type="submit"
                                className="w-full  bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-5 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300 text-center "
                            >
                                Login
                            </button>
                            <button
                                type="submit"
                                className="w-full m-3  bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300 "
                            >
                                Sign Up
                            </button>
                            </div>
    </div>
    </div>
    

    </>
  )
}

export default Login
