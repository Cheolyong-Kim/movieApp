import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/loading";
import Youtube from "react-youtube";
import styles from "../css/detail.module.css";

export default function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    const opts = {
        width: "1000px",
        height: "500px"
    }
    const getMovie = async() => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <article>
            {loading ? <Loading></Loading> :
            <div className={styles.wrap}>
                <input className={styles.back_button} type="button" onClick={() => navigate(-1)}></input>
                <h1 className={styles.movie_title}>{movie.title} ({movie.year})</h1>
                <span className={styles.movie_rating}>rating: {movie.rating}/10</span>
                <Youtube className={styles.movie_trailer} videoId={movie.yt_trailer_code} opts={opts}></Youtube>
                <p className={styles.movie_description}>{movie.description_full}</p>
            </div>
            }
        </article>
    )
}