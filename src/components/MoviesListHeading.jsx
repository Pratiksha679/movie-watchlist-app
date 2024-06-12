import 'bootstrap-icons/font/bootstrap-icons.css';

export const MovieListHeading = () => {
    return (
        <div>
            <div className='d-flex flex-column m-4 p-2'>
                <div className='border border-danger rounded-2 p-3'>
                    <h1>Welcome to <small className="text-danger"> WatchLists</small></h1>
                    <p className="mt-3 lead">Browse movies, add, view and remove them from the playlist.</p>
                    <p className="mt-3 lead">Just click the <i className="bi bi-bookmark-plus"></i> to add movies to watchlist</p>
                </div>
            </div>
        </div>
    )
}