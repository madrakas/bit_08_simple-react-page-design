import { Banner } from '../banner/Banner';
import { StatDetail } from '../statdetail/StatDetail';
import style from './MiddleStat.module.css';

export function MiddleStat(){
    return(
        <div className={style.middleStat}>
            <StatDetail/>
            <Banner />
        </div>
    );
}