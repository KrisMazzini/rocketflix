import './styles.css'

export function Movie() {
    return (
        <div className='movie'>
            <img src="https://picsum.photos/171/244" alt="Movie cover" />
            <div className="movie-details">
                <h2>Movie title</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore explicabo quidem neque architecto molestias? Harum architecto nisi illo impedit, deleniti quod sed voluptatem incidunt laborum, laboriosam, maiores minima quis eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda commodi voluptate perspiciatis earum totam officia sit dolorem ea esse, maiores in deleniti molestias recusandae minima harum nemo dolor expedita architecto!</p>
            </div>
        </div>
    )
}