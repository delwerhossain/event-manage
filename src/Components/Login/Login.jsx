import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
const navigate = useNavigate()
    const {signInUser, signInWithGoogle} = useContext(AuthContext);

    const handleSignIn= e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(email, password);
        signInUser(email, password)
        .then(res=>{
            toast.success('Successfully logged in!')
            navigate('/')
        })
        .catch(error=>{
            console.error(error)
            toast.error("Doesn't registered yet")
        })
    }


    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(res=>{
            toast.success("successfully logged in")
            navigate('/')
        })
        .catch(error=>{
            toast.error(error.meessage)
        })
    }
    return (
    //    
<div className="flex justify-center items-center">
<div className="w-full  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form onSubmit={handleSignIn} className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to get service</h5>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
       
      <div className="grid grid-cols-4 ">
     <p onClick={handleGoogleSignIn} className="text-2xl text-center pt-2"> <FcGoogle></FcGoogle></p>

      <button type="submit" className="w-full col-span-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        
      </div>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <NavLink to={'/registration'} href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</NavLink>
        </div>
    </form>
</div>
</div>

    );
};

export default Login;