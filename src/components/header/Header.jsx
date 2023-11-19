import style from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export function Header(){
    const ringElement = <FontAwesomeIcon icon={faBell} />;
    const searchElement = <FontAwesomeIcon icon={faMagnifyingGlass} />;
    return(
        <div className={style.header}>
            <div className={style.logoContainer}>
                <img className={style.logo} src={require('./img/logo.png')} alt="logo"/>
            </div>
            <div className={style.headerContainer}>
                <div className={style.searchContainer}>
                    <div className={style.searchIcon}>{searchElement}</div>
                    <input className={style.searchInput} type='text' placeholder='Type to search' ></input>
                </div>
                <div className={style.userContainer}>
                    <div className={style.ringContainer}>
                        <div className={style.ring}>{ringElement}</div>
                        <div className={style.notificationCoounter}>{'2'}</div>
                    </div>
                    <div className={style.userImg}></div>
                    <div className={style.userDescription}>
                        <p className={style.userName}>David Spade</p>
                        <p className={style.userTitle}>Sales Admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}




