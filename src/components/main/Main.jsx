import { Aside } from '../aside/Aside';
import style from './Main.module.css';

export function Main(){
    return(
        <div className={style.main}>
            <Aside />
        </div>
    )
}