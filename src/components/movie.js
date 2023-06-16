import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styles from "../css/movie.module.css";
import defaultImg from "../img/default_cover_img.png";

export default function Movie({ id, coverImg, title, summary, genres }) {
    const handImgError = (e) => {
        e.target.src = defaultImg;
    }
    return (
        <div className={styles.movie_wrap}>
            <Link to={`/movie/${id}`}>
                <img src={coverImg} alt={title} className={styles.movie_thumbnail} onError={handImgError}></img>
            </Link>
            <Link to={`/movie/${id}`}>
                <h2 className={styles.movie_title}>{title}</h2>
            </Link>
            <ul className={styles.movie_genres}>
                {genres.map(g => <li key={g}>{g}</li>)}
            </ul>
            <p className={styles.movie_summary}>{summary}</p>
        </div>
      )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}