import { useState, useRef } from "react";
import Movie from "./movie";
import styles from "../css/carousel.module.css";

export default function Carousel({ movies }) {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const imageRef = useRef([]);
    const onSelectImg = (currentIdx) => {
        setCurrentImgIdx(currentIdx);
        imageRef.current[currentIdx].scrollIntoView({
            inline: "center",
            block: "start",
            behavior: "smooth"
        })
    }
    const onButtonClick = (currentIdx) => {
        const firstIdx = 0;
        const lastIdx = movies.length - 1;

        if (currentIdx < firstIdx) {
            return onSelectImg(lastIdx);
        }
        if (currentIdx > lastIdx) {
            return onSelectImg(firstIdx);
        }
        
        onSelectImg(currentIdx);
    }
    return (
        <article>
            <div className={styles.content_wrap}>
                {movies.map((movie, index) =>
                    <div 
                        ref={(el) => imageRef.current[index] = el} 
                        key={movie.id} 
                        style={
                            {
                                background: `url(${movie.background_image}) no-repeat`,
                                backgroundSize: 'cover',
                            }
                        }
                    >
                        <Movie
                            id={movie.id}
                            coverImg={movie.large_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}>
                        </Movie>
                    </div>
                )}
            </div>
            <input type="button" className={styles.up_button} onClick={() => onButtonClick(currentImgIdx - 1)}></input>
            <input type="button" className={styles.down_button} onClick={() => onButtonClick(currentImgIdx + 1)}></input>
        </article>
    )
}