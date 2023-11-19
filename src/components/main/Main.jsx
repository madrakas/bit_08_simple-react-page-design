import { Aside } from '../aside/Aside';
import { BottomStat } from '../bottomstat/BottomStat';
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
                <BottomStat />
            </div>
        </div>
    );
}