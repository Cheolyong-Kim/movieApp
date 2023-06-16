import spinner from '../img/spinner.gif';
import styles from '../css/loading.module.css';

export default function Loading() {
    return(
        <div className={styles.loading_wrap}>
            <img src={spinner} alt='로딩이미지' className={styles.loading_img}></img>
            <h1 className={styles.loading_message}>Loading...</h1>
        </div>
    )
}