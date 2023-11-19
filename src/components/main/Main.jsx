import { Aside } from '../aside/Aside';
import { TopStat } from '../topstat/TopStat';
import style from './Main.module.css';


export function Main(){
    return(
        <div className={style.main}>
            <Aside />
            <div className={style.content}>
                <TopStat />
            </div>
        </div>
    )
}