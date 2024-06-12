export const MoviesSearchFilter = (props) => {
    let value;
    return (
        <div className='d-flex flex-column m-4 p-2'>
            <div className="input-group col-xs-6">
                <span className="input-group-text"><i className="bi bi-search"></i></span>
                <input type="text" className="form-control" placeholder="Search movie by its Title" onChange={(e) => {
                    value = e.target.value;
                }} />
                <button className="btn btn-danger" onClick={() => {
                    props.setSearchFilter(value);
                }}>Search</button>
            </div>
        </div>
    )
}