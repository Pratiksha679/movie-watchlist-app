
import '../App.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useState } from 'react';
import { toast } from 'react-toastify'

export const SignupPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("User registered successfully !", {
                position: "top-center",
            });
            navigate("/");
        }
        catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center w-100 vh-100 bg-black">
            <div className="col-lg-4 col-md-5 col-sm-auto form-container p-5 rounded bg-white">
                <form className='has-validation' onSubmit={handleRegister}>
                    <h3 className="text-center">Create An Account</h3>
                    <div className="form-group mb-4">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="Enter your email" className="form-control" value={email} onChange={(e) => {
                            setEmail(e.target.value);
                        }} required />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="Enter your password" className="form-control" value={password} autoComplete="on" onChange={(e) => {
                            setPassword(e.target.value);
                        }} required />
                    </div>
                    <div className="d-grid mb-4">
                        <button className="btn btn-danger" type='submit'>Sign Up</button>
                    </div>
                    <p className='text-end'>
                        Already registered?<Link to="/" className='ms-2'>Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
