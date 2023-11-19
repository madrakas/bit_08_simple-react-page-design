import { Aside } from '../aside/Aside';
import { MiddleStat } from '../middlestat/MiddleStat';
import { TopStat } from '../topstat/TopStat';
import style from './Main.module.css';


export function Main(){
    return(
        <div className={style.main}>
            <Aside />
            <div className={style.content}>
                <TopStat />
                <MiddleStat />
                {/* row3 */}
            </div>
            
        </div>
    );
}