import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
    return (
        <div>
            <button className="inline-flex items-center justify-center gap-2 w-full bg-red-600 px-6 py-3 text-white text-sm font-medium uppercase rounded-[4px] mb-6 shadow-md hover:bg-red-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-800"><FcGoogle className="bg-white rounded-full text-2xl" /> Continue With Google</button>
        </div>
    );
};

export default OAuth;