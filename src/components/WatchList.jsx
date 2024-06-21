import { MoviesSideBar } from "./MoviesSideBar"
import { MoviesList } from "./MoviesList"
import { RemoveFromWatchListButton } from "./RemoveFromWatchListButton"
import { useLocalStorage } from "usehooks-ts"
import swal from "sweetalert"
import { auth } from "../config/firebase"

export const WatchList = () => {
    const currentUserUid = auth.currentUser.uid;
    const localStorageKey = `react-app-watchlist-items-${currentUserUid}`;
    const [watchlist, setWatchList] = useLocalStorage(localStorageKey, []);
    const handleMovieClick = (movie) => {
        const filterMovieWatchList = watchlist.filter((item) => {
            return item.imdbID != movie.imdbID;
        });
        setWatchList(filterMovieWatchList);
        swal("Success", "Movie is removed from your watchlist", "success");
    }
    return (
        <div className='d-flex p-3 justify-content-start vh-100 w-100'>
            <div className='col-xs-3'>
                <MoviesSideBar />
            </div>
            <div className='col'>
                <div className='card-container p-2 m-4 justify-content-start'>
                    <MoviesList movies={watchlist} handleMovieClick={handleMovieClick} WatchListButtonComponent={RemoveFromWatchListButton} />
                </div>
            </div>
        </div>)
}