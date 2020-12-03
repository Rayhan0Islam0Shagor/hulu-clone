import React, { useEffect, useState } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './Result.css';
import axios from '../Request/axios';
import FlipMove from 'react-flip-move';

function Result({ selectedOption }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [selectedOption]);



    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie} />
                ))
                }
            </FlipMove>
        </div>
    )
}

export default Result
