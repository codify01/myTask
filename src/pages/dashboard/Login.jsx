import React from "react";
import BtnOne from "../../components/Buttons/BtnOne";

const Login = () => {


    return (
        
        <div className="login-page sContainer flex justify-center items-center h-[100vh]">
            {/* <div className="frm2 p-10"> */}
            <div className='border dark:border-neutral-500 border-neutral-400 p-10 rounded-md dark:bg-neutral-800 bg-neutral-200 space-y-10 md:w-[75%] w-full'>
                <div className="text-center">
                    <h2 className="font-bold text-3xl text-center text-pry">myTask</h2>
                    <h2>Sign in to your Account </h2>
                    <p>Welcome back to myTask, your effectiveness is our goal😇</p>
                </div>
                <form action="" className="d-flex space-y-4 w-full flex-column">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-900 dark:text-white">Email Address</label>
                        <input type="email" name="email" className="bg-neutral-500/60 border border-neutral-500 text-accent-black text-sm rounded-md outline-none block w-full p-3 dark:bg-neutral-900/60 dark:border-gray-800 dark:text-white"/>
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" className="bg-neutral-500/60 border border-neutral-500 text-accent-black text-sm rounded-md outline-none block w-full p-3 dark:bg-neutral-900/60 dark:border-gray-800 dark:text-white"/>
                    </div>
                    <BtnOne name={"Login"} style={'border-green-800 bg-green-900/20 px-10 py-3 mx-auto hover:bg-pry'}/>
                </form>
            </div>
        </div>

    );

}

export default Login;