import { useState } from 'react';
import '../App.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { emailAtom } from '../store/atoms/EmailAtom';

export const SignupPage = () => {
    return (<>
        <RecoilRoot>
            <SignUpApp />
        </RecoilRoot>
    </>)

}

function SignUpApp() {
    const [email, setEmail] = useRecoilState(emailAtom);
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center align-items-center w-100 vh-100 bg-black">
            <div className="col-lg-4 col-md-5 col-sm-auto form-container p-5 rounded bg-white">
                <form className='was-validated' onSubmit={(e) => {
                    e.preventDefault();
                    navigate("/login");
                }}>
                    <h3 className="text-center">Create An Account</h3>
                    <div className="form-group was-validated mb-4">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="Enter your email" className="form-control" value={email} onChange={(e) => {
                            setEmail(e.target.value);
                        }} required />
                        <div className="invalid-feedback">
                            Please Enter Valid Email Id
                        </div>
                    </div>
                    <div className="d-grid mb-4">
                        <button className="btn btn-danger" type='submit'>Sign Up</button>
                    </div>
                    <p className='text-end'>
                        Already registered?<Link to="/login" className='ms-2'>Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}