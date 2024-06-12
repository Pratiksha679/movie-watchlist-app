import '../App.css'
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const onSubmit = (e) => {

    }
    const navigate = useNavigate();
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-black">
            <div className="col-lg-4 col-md-5 col-sm-auto form-container p-5 rounded bg-white">
                <form className='was-validated' onSubmit={(e) => {
                    e.preventDefault();
                    navigate("/search");
                }}>
                    <h3 className="text-center">Login</h3>
                    <div className="form-group has-validation mb-4">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="Enter your email" className="form-control" required />
                        <div className="invalid-feedback">
                            Please Enter Valid Email Id
                        </div>
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
