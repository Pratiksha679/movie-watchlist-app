import { useEffect, useState } from 'react'
import { MoviesList } from '../components/MoviesList'
import { MovieListHeading } from '../components/MoviesListHeading'
import { MoviesSearchFilter } from '../components/MoviesSearchFilter'
import { MoviesSideBar } from '../components/MoviesSideBar'
import { AddToWatchListButton } from '../components/AddtoWatchListButton'
import { useLocalStorage } from "usehooks-ts"
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { errorAtom } from '../store/atoms/ErrorAtom'
import { successAtom } from '../store/atoms/SuccessAtom'
import { emailAtom } from '../store/atoms/EmailAtom'

export const MovieLandingPage = () => {
    return (<>
        <RecoilRoot>
            <MovieLandingApp />
        </RecoilRoot>
    </>)
}

function MovieLandingApp() {
    const [movies, setMovies] = useState([]);
    const [searchFilter, setSearchFilter] = useState("");
    const email = useRecoilValue(emailAtom);
    const [watchlist, setWatchList] = useLocalStorage(`react-app-watchlist-items-${email}`, []);
    const [errorMessage, setErrorMessage] = useRecoilState(errorAtom);

    const getMoviesListAndUpdateState = (searchFilter) => {
        if (searchFilter) {
            fetch(`http://www.omdbapi.com/?s=${searchFilter}&apikey=a0cad860`).then((initialResponse) => {
                initialResponse.json().then((actualResponse) => {
                    if (actualResponse.Search) {
                        setMovies(actualResponse.Search);
                    }
                    else {
                        setErrorMessage("Movie Title that you entered is not present , Please try again with correct movie title!");
                    }
                })
            })
        }
        else {
            setErrorMessage("Please enter the title of the movie to search for a movie");
        }
    };

    useEffect(() => {
        setErrorMessage("");
        getMoviesListAndUpdateState(searchFilter);
    }, [searchFilter]);

    const handleMovieClick = (movie) => {
        setWatchList([...watchlist, movie])
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
                <MoviesList errorMessage={errorMessage} movies={movies} handleMovieClick={handleMovieClick} WatchListButtonComponent={AddToWatchListButton} />
            </div>
        </div>
    </div>)
}