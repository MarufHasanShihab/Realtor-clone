import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth, db } from "../../config/firebase.config";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
    const navigate = useNavigate()
    const onGoogleClick = async ()=>{
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth,provider);
            const user = result.user
            const docRef = doc(db,"users",user.uid);
            const docSnap = getDoc(docRef);
            if(!(await docSnap).exists()){
                await setDoc(docRef,{
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }
            navigate("/")
        } catch (error) {
            toast.error("Could not authorize with Google");
        }
    } 
    return (
        <div>
            <button type="button" onClick={onGoogleClick} className="inline-flex items-center justify-center gap-2 w-full bg-red-600 px-6 py-3 text-white text-sm font-medium uppercase rounded-[4px] mb-6 shadow-md hover:bg-red-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-800"><FcGoogle className="bg-white rounded-full text-2xl" /> Continue With Google</button>
        </div>
    );
};

export default OAuth;