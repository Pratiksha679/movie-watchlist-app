export const MoviesList = ({ movies, handleMovieClick, WatchListButtonComponent }) => {
    return (
        <>
            {movies.map((movie) => (
                < div className="card-wrap col-lg-3 col-md-4 col-sm-6 col-xs-12 p-4" key={movie.imdbID} >
                    <div className='card text-start vh-50'>
                        <div className="icon-img-container" onClick={() => {
                            handleMovieClick(movie);
                        }}>
                            <WatchListButtonComponent />
                            <img src={movie.Poster} className='card-img-top' alt={movie.Title} />
                        </div>
                        <div className="card-body text-dark">
                            <h6 className="card-title">{movie.Title}</h6>
                            <h6 className="card-subtitle">({movie.Year})</h6>
                        </div>
                    </div>
                </div >
            ))}
        </>
    )
}