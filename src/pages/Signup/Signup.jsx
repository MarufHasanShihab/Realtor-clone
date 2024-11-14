import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../../components/OAuth/OAuth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, db} from "../../config/firebase.config"
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  // handle form submit
  const onSubmit = async e =>{
    e.preventDefault();
    // password validation
    if(password.length < 6){
      toast.error("password must be at least 6 characters")
      return
    }
    try {
      const userCradential = await createUserWithEmailAndPassword(auth, email,password);
      updateProfile(auth.currentUser,{
        displayName: name
      })
      const formData = {name,email,password};
      delete formData.password;
      formData.timestamp = serverTimestamp();
      await setDoc(doc(db,"users",userCradential.user.uid),formData);
      navigate("/");
      toast.success("sign up was successfully!")
      
    } catch (error) {
      toast.error(error.code.split("/")[1].split("-").join(" "))
    }
  

  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center items-center flex-wrap px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
              placeholder="Full name"
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
              placeholder="Email address"
              required
            />
            <div className="relative mb-6">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                value={password}
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                placeholder="Password"
                required
              />
              <div
                className="absolute right-3 top-3 text-xl cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p>
              Have an account?
              <Link to="/sign-in" className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">Sign in</Link>
              </p>
            </div>
            <button type="submit" className="w-full bg-blue-600 px-6 py-3 text-white text-sm font-medium uppercase rounded-[4px] mb-6 shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">Sign Up</button>
            
          <div className="flex items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300 mb-6">
            <p className="text-center">OR</p>
          </div>
            <OAuth/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
