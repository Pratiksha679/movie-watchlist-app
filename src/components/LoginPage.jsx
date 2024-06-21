import { useState } from 'react';
import '../App.css'
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify'
import { auth } from '../config/firebase';

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("User logged in successfully !", {
                position: "top-center",
            });
            navigate("/search");
        }
        catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }

    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-black">
            <div className="col-lg-4 col-md-5 col-sm-auto form-container p-5 rounded bg-white">
                <form className='has-validation' onSubmit={onSubmit}>
                    <h3 className="text-center">Login</h3>
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
                        <button className="btn btn-danger" type="submit">Log In</button>
                    </div>
                    <p className='text-end'>
                        Don't have an account?<Link to="/signup" className='ms-2'>Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
