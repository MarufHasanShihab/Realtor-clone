import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../../components/OAuth/OAuth";

const Forgetpassword = () => {
  const [email, setEmail] = useState("");
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forget Password</h1>
      <div className="flex justify-center items-center flex-wrap px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form action="">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
              placeholder="Email address"
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
            <p>
                Don't have an account?<Link to="/sign-up" className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">Register</Link>
              </p>
              
              <p>
                <Link to="/forget-password" className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out">
                Sign in instead</Link>
              </p>
            </div>
            <button type="submit" className="w-full bg-blue-600 px-6 py-3 text-white text-sm font-medium uppercase rounded-[4px] mb-6 shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">Send reset password</button>
            
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

export default Forgetpassword;
