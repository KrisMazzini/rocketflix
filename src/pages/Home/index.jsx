import React, { useState } from 'react'
import axios from 'axios'

import { Movie } from '../../components/Movie'
import { API_KEY, BASE_URL, IMG_URL } from '../../services/api'

import './styles.css'

export function Home() {

    const [movie, setMovie] = useState()

    async function handleShuffleMovie() {
        try {
            const page = getRandomInteger(1, 500)
            const api = `${BASE_URL}?api_key=${API_KEY}&page=${page}`
            const response = await axios.get(api)
            const popularMovies = response.data.results
            const chosenMovie = getRandomMovie(popularMovies)

            setMovie({
                title: chosenMovie.title,
                overview: chosenMovie.overview,
                poster: `${IMG_URL}/${chosenMovie.poster_path}`
            })
        } catch(err) {
            console.error(`There was an error:\n\n${err}`)
            setMovie({
                title: "Oops, it looks like today is not a good day for movies... Let's code! 🚀",
                overview: "",
                poster: "/Poster.png"
            })
        } finally {
            console.log("Request concluded.")
        }
    }

    function getRandomMovie(movies) {
        const minIndex = 0
        const maxIndex = movies.length - 1
        const randomIndex = getRandomInteger(minIndex, maxIndex)

        return movies[randomIndex]
    }

    function getRandomInteger(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <main>
            <header>
                <img src="/shuffle.svg" alt="Icon"/>
                <h1>Don&apos;t know what to watch?</h1>
            </header>
            {
                !!movie ? (
                    <Movie 
                        title={movie.title}
                        overview={movie.overview}
                        poster={movie.poster}
                    />
                ) : <></>
            }
            <button type="button" onClick={handleShuffleMovie}>
                <img src="/shuffle.svg" alt="Icon" />
                <p>Find movie</p>
            </button>
            <footer>
                <p>
                    Click on "Find movie" that we&apos;ll bring a suggestion for you to watch today.
                </p>
            </footer>
        </main>
    )
}