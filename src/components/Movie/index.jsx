import './styles.css'

export function Movie({title, overview, poster}) {
    return (
        <div className='movie'>
            <img src={poster} alt="Movie cover" />
            <div className="movie-details">
                <h2>{title}</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}