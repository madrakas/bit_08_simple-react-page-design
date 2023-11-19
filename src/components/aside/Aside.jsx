import style from './Aside.module.css';
import { AsideMenu } from './AsideMenu';
import { AsideLogout } from './AsideLogout';

export function Aside(){
    return(
        <div className={style.aside}>
            <AsideMenu />
            <AsideLogout />
        </div>
    )
}