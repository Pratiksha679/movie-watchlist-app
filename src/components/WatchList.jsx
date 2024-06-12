import { MoviesSideBar } from "./MoviesSideBar"
import { MoviesList } from "./MoviesList"
import { RemoveFromWatchListButton } from "./RemoveFromWatchListButton"
import { useLocalStorage } from "usehooks-ts"
import { useRecoilValue } from "recoil"
import { emailAtom } from "../store/atoms/EmailAtom"

export const WatchList = () => {
    return (<Recoil>
        <WatchListApp />
    </Recoil>)
}


function WatchListApp() {
    const email = useRecoilValue(emailAtom);
    const [watchlist, setWatchList] = useLocalStorage("react-app-watchlist-items-" + email);
    const handleMovieClick = (movie) => {
        const filteredArray = watchlist.filter((item) => {
            return item.imdbID !== movie.imdbID
        })
        setWatchList(filteredArray);
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