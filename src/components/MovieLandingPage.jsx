import { useEffect, useState } from 'react'
import { MoviesList } from '../components/MoviesList'
import { MovieListHeading } from '../components/MoviesListHeading'
import { MoviesSearchFilter } from '../components/MoviesSearchFilter'
import { MoviesSideBar } from '../components/MoviesSideBar'
import { AddToWatchListButton } from '../components/AddtoWatchListButton'
import { useLocalStorage } from "usehooks-ts"
import { auth } from '../config/firebase'

export const MovieLandingPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchFilter, setSearchFilter] = useState("");
    const currentUserUid = auth.currentUser.uid;
    const localStorageKey = `react-app-watchlist-items-${currentUserUid}`;
    const [watchlist, setWatchList] = useLocalStorage(localStorageKey, []);

    const apiKey = process.env.REACT_APP_APIKEY;

    const getMoviesListAndUpdateState = (searchFilter) => {
        if (searchFilter && searchFilter != "") {
            fetch(`https://www.omdbapi.com/?s=${searchFilter}&apikey=${apiKey}`).then((initialResponse) => {
                initialResponse.json().then((actualResponse) => {
                    if (actualResponse.Search) {
                        setMovies(actualResponse.Search);
                    }
                })
            })
        }
    };

    useEffect(() => {
        getMoviesListAndUpdateState(searchFilter);
    }, [searchFilter]);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {

        })
    })

    const handleMovieClick = (movie) => {
        const movieInWatchlist = watchlist.find((item) => {
            return item.imdbID == movie.imdbID;
        })
        if (movieInWatchlist) {
            swal("Error", "The selected movie is already present in your watchlist", "error");
        }
        else {
            swal("Success", "Movie is added to your watchlist", "success");
            setWatchList([...watchlist, movie]);
        }
    }

    return (<div className='d-flex p-3 justify-content-start vh-100 w-100'>
        <div className='col-xs-3'>
            <MoviesSideBar />
        </div>
        <div className='col'>
            <div>
                <MovieListHeading />
            </div>
            <div>
                <MoviesSearchFilter setSearchFilter={setSearchFilter} />
            </div>
            <div className='card-container p-2 m-4 justify-content-start'>
                <MoviesList movies={movies} handleMovieClick={handleMovieClick} WatchListButtonComponent={AddToWatchListButton} />
            </div>
        </div>
    </div>
    )
}