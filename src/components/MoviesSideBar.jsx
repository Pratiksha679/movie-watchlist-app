import '../App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router';
import { auth } from '../config/firebase';

export const MoviesSideBar = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await auth.signOut();
            console.log("User logged out successfully!");
            navigate('/');
        }
        catch (error) {
            console.log("Error looging out the user ", error.message);
        }
    }
    return (
        <>
            <div className='d-flex flex-column m-3'>
                <div>
                    <h2 className='text-danger'>Watchlists</h2>
                </div>
                <div className="mt-5">
                    <button className="btn btn-danger custom-width" onClick={() => {
                        navigate('/search');
                    }}>
                        <i className="bi bi-house-door"></i>&nbsp;
                        Home
                    </button>
                </div>
                <hr className="hr custom-width" />
                <div>
                    <h3 className='text-dark'>My Lists</h3>
                </div>
                <div className="mt-3">
                    <button className="btn btn-light custom-width w-100" onClick={() => {
                        navigate('/watchlist');
                    }}>
                        <i className="bi bi-film ms-2"></i>&nbsp;
                        Personal WatchList
                    </button>
                </div>
                <div className='mt-3'>
                    <button className="btn btn-light custom-width w-100" onClick={() => {
                        handleLogout();
                    }}>
                        <i className="bi bi-box-arrow-left"></i>&nbsp;
                        Log out
                    </button>
                </div>
            </div >
        </>
    )
}