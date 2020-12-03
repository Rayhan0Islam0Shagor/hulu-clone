import React, { forwardRef } from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import FavoriteIcon from '@material-ui/icons/Favorite';

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {

    return (
        <div ref={ref} className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster" title={movie.title || movie.original_name} />
            <TextTruncate line={1} element="p" truncateText="..." text={movie.overview} />
            <h2>{movie.title || movie.original_name}</h2>

            <p className="videoCard_stats">
                {movie.release_date || movie.first_alt_date} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FavoriteIcon style={{ color: "red", fontSize: "16px", paddingTop: "5px" }} /> {" "}
                {movie.vote_count}
            </p>

        </div>
    )
});

export default VideoCard
