import { Link } from "react-router-dom";

import { FaPlay } from 'react-icons/fa'

import styles from './LandigPage.module.css';
import logo from '../../assets/img/logo.jpg'

export const LandingPage = (props) => {
    return(
        <div className={styles.container}>
            {/* <div className={styles.unbrokenContainer}>
                <div className={styles.handsContainer}>
                    Hands
                </div>
                <div className={styles.title}>
                    UBROKEN
                </div>
            </div> */}
            <div className={styles.unbrokenContainerLogo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.linkHome}>
                <Link className={styles.btn} to='/home'>
                    <FaPlay />
                </Link>
            </div>
        </div>
    )
}