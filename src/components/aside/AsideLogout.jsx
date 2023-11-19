import style from './AsideMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export function AsideLogout(){
    const iconHome = <FontAwesomeIcon className={style.icon} icon={faRightFromBracket}/>;
    return(
        <div className={style.asideMenuItem}>{iconHome}Log out</div>
    )
}

<i class="fa-solid fa-right-from-bracket"></i>