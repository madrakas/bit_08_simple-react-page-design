import { Invoices } from '../Invoices/Invoices';
import { Atcivities } from '../activities/Activities';
import style from './BottomStat.module.css';

export function BottomStat(){
    return(
        <div className={style.bottomStat}>
            <Atcivities />
            <Invoices />
        </div>
    );
}

